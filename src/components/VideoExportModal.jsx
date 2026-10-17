import React, { useState, useRef } from 'react';
import { X, Video, Download, Music, Smartphone } from 'lucide-react';
import { setCustomAudioTrack } from '../utils/audioManager';

export default function VideoExportModal({ isOpen, onClose, onStartAutoPresentation, totalPages }) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordStatus, setRecordStatus] = useState('');
  const [customSongName, setCustomSongName] = useState('');
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);

  if (!isOpen) return null;

  const handleCustomAudioUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomSongName(file.name);
      setCustomAudioTrack(file);
    }
  };

  const startAutomatedRecording = async () => {
    try {
      setRecordStatus('Connecting screen capture...');
      setIsRecording(true);
      setRecordedVideoUrl(null);
      recordedChunksRef.current = [];

      // Prompt user to select current tab/window
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: 'browser',
          frameRate: { ideal: 30, max: 60 },
        },
        audio: true,
      });

      const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
        ? 'video/webm;codecs=vp9,opus'
        : 'video/webm';

      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: mimeType });
        const videoUrl = URL.createObjectURL(blob);
        setRecordedVideoUrl(videoUrl);
        setIsRecording(false);
        setRecordStatus('Video ready for download!');
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setRecordStatus('Recording presentation slides with music...');

      onClose();

      if (onStartAutoPresentation) {
        onStartAutoPresentation(() => {
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
          }
        });
      }
    } catch (err) {
      console.warn('Screen recording cancelled or failed:', err);
      setIsRecording(false);
      setRecordStatus('');
    }
  };

  const handleDownloadVideo = () => {
    if (!recordedVideoUrl) return;
    const a = document.createElement('a');
    a.href = recordedVideoUrl;
    a.download = 'Tanish-Prachi-Wedding-Invitation.webm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm select-none">
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#2B040C] via-[#1A0105] to-[#2B040C] border-2 border-amber-400/80 p-5 shadow-[0_0_50px_rgba(212,175,55,0.4)] text-amber-50 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center pt-1 pb-3 border-b border-amber-400/30">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-serif font-bold uppercase tracking-widest mb-1.5">
            <Video className="w-3.5 h-3.5" />
            <span>WhatsApp Video Form</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-black text-amber-200 tracking-wide">
            वीडियो फॉर्म में शेयर करें
          </h3>
          <p className="font-hindi text-xs text-amber-300/80 mt-0.5">
            सभी रिश्तेदारों एवं मित्रों को WhatsApp पर वीडियो भेजें
          </p>
        </div>

        <div className="space-y-4 py-4 text-xs sm:text-sm font-serif">
          <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-400/40 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <span className="w-5 h-5 rounded-full bg-amber-400 text-[#2B040C] flex items-center justify-center text-xs font-black">1</span>
              <span>कंप्यूटर / लैपटॉप से ऑटोमैटिक वीडियो बनाएं:</span>
            </div>
            <p className="text-stone-300 text-[11px] leading-relaxed">
              नीचे दिए गए बटन पर क्लिक करें, यह स्क्रीन को रिकॉर्ड करके सभी {totalPages} पेजों को शहनाई म्यूजिक के साथ ऑटो-प्ले करेगा और सीधे वीडियो डाउनलोड कर देगा।
            </p>

            {recordedVideoUrl ? (
              <button
                onClick={handleDownloadVideo}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>डाउनलोड करें (Download Video)</span>
              </button>
            ) : (
              <button
                onClick={startAutomatedRecording}
                disabled={isRecording}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-[#2B040C] font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-transform hover:scale-[1.02]"
              >
                <Video className="w-4 h-4" />
                <span>{isRecording ? 'रिकॉर्डिंग चालू है...' : 'ऑटो वीडियो रिकॉर्डिंग शुरू करें'}</span>
              </button>
            )}

            {recordStatus && (
              <p className="text-[11px] text-amber-300 text-center animate-pulse">
                {recordStatus}
              </p>
            )}
          </div>

          <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-400/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>मोबाइल से WhatsApp वीडियो कैसे बनाएं (सबसे आसान):</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-stone-300 text-[11px] leading-relaxed pl-1">
              <li>यह लिंक अपने मोबाइल (Chrome/Safari) में खोलें।</li>
              <li>मोबाइल का <strong className="text-amber-200">Screen Recorder</strong> चालू करें।</li>
              <li>कार्ड खोलें — म्यूजिक के साथ सभी पेज ऑटोमैटिक चलेंगे।</li>
              <li>रिकॉर्डिंग बंद करें और WhatsApp पर सभी को सीधे भेजें!</li>
            </ol>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-amber-400/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-amber-300 text-xs">
              <Music className="w-4 h-4" />
              <div>
                <p className="font-bold">पसंदीदा गाना लगाना चाहते हैं?</p>
                <p className="text-[10px] text-stone-400">
                  {customSongName ? `सलेक्टेड: ${customSongName}` : 'अपना MP3 गाना चुनें'}
                </p>
              </div>
            </div>
            <label className="cursor-pointer py-1.5 px-3 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/50 text-amber-200 text-[11px] font-bold whitespace-nowrap">
              गाना चुनें
              <input
                type="file"
                accept="audio/*"
                onChange={handleCustomAudioUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="pt-2 text-center border-t border-amber-400/30">
          <button
            onClick={onClose}
            className="px-6 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 text-xs font-serif font-semibold"
          >
            बंद करें (Close)
          </button>
        </div>
      </div>
    </div>
  );
}
