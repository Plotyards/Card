import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PaisleyDivider, CornerFlourish } from './MandalaMotif';
import { Heart, Send, CheckCircle2, User, Users, MessageSquare, Sparkles } from 'lucide-react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    guestCount: '1',
    attendance: 'Yes',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Trigger golden celebration confetti
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#600C1F', '#B8860B', '#E29578']
      });
    } catch (err) {
      // safe fallback
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      guestCount: '1',
      attendance: 'Yes',
      message: ''
    });
  };

  return (
    <section id="rsvp" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-[#FDFBF7] scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wedding-maroon/10 text-wedding-maroon text-xs uppercase tracking-widest font-semibold mb-2">
            <Heart className="w-3.5 h-3.5" />
            <span>Celebrate With Us</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-wedding-maroon-dark tracking-wide">
            Will you join us?
          </h2>

          <p className="font-hindi text-base sm:text-lg text-stone-600 mt-1">
            उपस्थिति की मंगल सूचना (RSVP)
          </p>

          <PaisleyDivider className="my-4" />

          {/* Cordially Invited By Nana & Nani */}
          <div className="my-4 p-4 sm:p-5 rounded-2xl bg-wedding-ivory/95 border-2 border-wedding-gold/60 shadow-md max-w-md mx-auto">
            <span className="text-xs uppercase tracking-widest text-wedding-gold-dark font-extrabold font-serif block">
              RSVP • निमंत्रक / स्वागताकांक्षी
            </span>
            <p className="font-serif text-xl sm:text-2xl font-black text-wedding-maroon-dark mt-1 tracking-wide">
              Shri Ramautar Lal &amp; Smt. Vibha Devi
            </p>
            <p className="font-hindi text-sm font-bold text-wedding-maroon mt-0.5">
              (पूज्य नाना जी एवं नानी जी • Samastipur)
            </p>
          </div>

          <p className="font-serif italic text-stone-600 text-sm sm:text-base">
            Please let us know if you will grace the wedding celebration of Tanish Raj &amp; Prachi Arya with your presence.
          </p>
        </div>

        {/* RSVP Card */}
        <div className="relative rounded-3xl bg-white p-6 sm:p-10 md:p-12 royal-border shadow-xl">
          <CornerFlourish position="tl" />
          <CornerFlourish position="tr" />
          <CornerFlourish position="bl" />
          <CornerFlourish position="br" />

          {isSubmitted ? (
            <div className="text-center py-8 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 border border-green-300 mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-wedding-maroon-dark">
                Thank You, {formData.name}!
              </h3>

              <p className="font-hindi text-lg text-wedding-gold-dark font-semibold">
                आपकी उपस्थिति हमारे लिए अत्यंत हर्ष का विषय है।
              </p>

              <p className="font-serif text-stone-600 text-sm sm:text-base max-w-md mx-auto">
                We have received your response ({formData.attendance === 'Yes' ? 'Attending with joy' : formData.attendance}). We look forward to celebrating with you!
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-4 text-xs font-serif uppercase tracking-widest text-wedding-maroon font-semibold underline underline-offset-4 hover:text-wedding-gold-dark cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="block font-serif text-sm font-semibold text-stone-800 mb-1.5 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-wedding-maroon" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar / Sharma Family"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/20 outline-none transition-all font-serif text-stone-800 bg-stone-50/50"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block font-serif text-sm font-semibold text-stone-800 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-wedding-maroon" />
                  <span>Number of Guests</span>
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/20 outline-none transition-all font-serif text-stone-800 bg-stone-50/50 cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests (Family)</option>
                </select>
              </div>

              {/* Attendance Radio Options */}
              <div>
                <label className="block font-serif text-sm font-semibold text-stone-800 mb-2">
                  Will you attend?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'Yes', label: 'Yes', hindi: 'हाँ, अवश्य' },
                    { id: 'Maybe', label: 'Maybe', hindi: 'संभवतः' },
                    { id: 'No', label: 'No', hindi: 'असमर्थ' }
                  ].map((option) => (
                    <button
                      type="button"
                      key={option.id}
                      onClick={() => setFormData({ ...formData, attendance: option.id })}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        formData.attendance === option.id
                          ? 'bg-wedding-maroon text-wedding-gold border-wedding-maroon shadow-sm font-bold'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-wedding-gold/60 font-medium'
                      }`}
                    >
                      <span className="block font-serif text-sm">{option.label}</span>
                      <span className="block font-hindi text-[11px] opacity-80">{option.hindi}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Wishes */}
              <div>
                <label className="block font-serif text-sm font-semibold text-stone-800 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-wedding-maroon" />
                  <span>Warm Wishes / Message for the Couple</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Share your blessings and congratulations for Tanish & Prachi..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-wedding-gold focus:ring-2 focus:ring-wedding-gold/20 outline-none transition-all font-serif text-stone-800 bg-stone-50/50"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-wedding-maroon via-wedding-burgundy to-wedding-maroon text-wedding-gold font-display text-sm tracking-widest uppercase font-bold shadow-lg hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 border border-wedding-gold cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Attendance</span>
                  <Sparkles className="w-4 h-4 text-wedding-gold" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
