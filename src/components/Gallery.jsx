import React, { useState } from 'react';
import { PaisleyDivider, CornerFlourish } from './MandalaMotif';
import { Camera, Sparkles, X, ZoomIn, Eye, Heart } from 'lucide-react';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      id: 'groom-portrait',
      image: '/avatars/groom-avatar.jpg',
      category: "Groom's Portrait",
      hindiCategory: "वर चित्र",
      title: "Tanish Raj",
      hindiTitle: "तनिष राज (वर)",
      description: "Royal portrait in traditional maroon embroidered sherwani & pagdi.",
      borderClass: "royal-border-groom",
      badgeClass: "bg-wedding-maroon text-wedding-gold",
      accentTag: "Groom's Side • वर पक्ष"
    },
    {
      id: 'bride-portrait',
      image: '/avatars/bride-avatar.jpg',
      category: "Bride's Portrait",
      hindiCategory: "वधू चित्र",
      title: "Prachi Arya",
      hindiTitle: "प्राची आर्य (वधू)",
      description: "Graceful bridal portrait in ornate rose-crimson lehenga & jewels.",
      borderClass: "royal-border-bride",
      badgeClass: "bg-rose-900 text-rose-100",
      accentTag: "Bride's Side • वधू पक्ष"
    },
    {
      id: 'wedding-union',
      image: '/avatars/couple-avatar.jpg',
      category: "Sacred Union",
      hindiCategory: "शुभ विवाह परिणय",
      title: "Tanish & Prachi",
      hindiTitle: "पावन परिणय सूत्र",
      description: "The eternal union with sacred Varmala garlands and eternal vows.",
      borderClass: "royal-border",
      badgeClass: "bg-wedding-gold-dark text-white",
      accentTag: "Sacred Phere • सात फेरे"
    },
    {
      id: 'celebration-moments',
      image: '/avatars/celebration-avatar.jpg',
      category: "Festive Celebrations",
      hindiCategory: "हल्दी • मेहंदी • संगीत",
      title: "Joyous Utsav",
      hindiTitle: "खुशियों भरा उत्सव",
      description: "Vibrant festivities with family, turmeric glow, music & dance.",
      borderClass: "royal-border",
      badgeClass: "bg-amber-600 text-white",
      accentTag: "Celebration • उत्सव"
    }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-stone-50/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-wedding-maroon/10 text-wedding-maroon text-xs uppercase tracking-widest font-semibold mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Portraits &amp; Celebrations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-wedding-maroon-dark tracking-wide">
            Royal Portrait Gallery
          </h2>

          <p className="font-hindi text-base sm:text-lg text-stone-600 mt-1">
            पावन स्मृतियों एवं कलात्मक चित्रों का झरोखा
          </p>

          <PaisleyDivider className="my-4" />

          <p className="font-serif italic text-stone-600 text-sm sm:text-base">
            Artistic glimpses of the bride, groom, and celebratory wedding festivities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`group relative rounded-2xl bg-[#FFFDF9] p-3 sm:p-4 flex flex-col justify-between ${item.borderClass} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1.5`}
            >
              <CornerFlourish position="tl" />
              <CornerFlourish position="tr" />
              <CornerFlourish position="bl" />
              <CornerFlourish position="br" />

              {/* Image Frame */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-inner border border-wedding-gold/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay with View Icon */}
                <div className="absolute inset-0 bg-wedding-maroon/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <div className="p-3 rounded-full bg-white/90 text-wedding-maroon shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <span className="text-white text-xs font-serif font-bold uppercase tracking-wider shadow-sm">
                    View
                  </span>
                </div>

                {/* Badge Tag */}
                <span className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase shadow-md ${item.badgeClass}`}>
                  {item.accentTag}
                </span>
              </div>

              {/* Text Info */}
              <div className="pt-3 pb-1 text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-wedding-gold-dark font-bold block">
                  {item.category}
                </span>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-wedding-maroon-dark mt-0.5 leading-snug">
                  {item.title}
                </h3>

                <span className="font-hindi text-xs text-stone-600 block mt-0.5">
                  {item.hindiTitle}
                </span>

                <p className="text-xs font-serif italic text-stone-500 mt-1 line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center justify-center gap-1.5 text-[11px] text-wedding-maroon font-semibold group-hover:text-wedding-gold-dark transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Tap to view portrait</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <p className="text-center text-xs text-stone-500 font-serif italic mt-8">
          ✦ Click any portrait to view in full royal gallery display ✦
        </p>

      </div>

      {/* Royal Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FFFDF9] rounded-3xl p-5 sm:p-6 border-2 border-wedding-gold/80 shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 rounded-full bg-wedding-maroon text-wedding-gold border-2 border-wedding-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <CornerFlourish position="tl" />
            <CornerFlourish position="tr" />
            <CornerFlourish position="bl" />
            <CornerFlourish position="br" />

            {/* Modal Image */}
            <div className="rounded-2xl overflow-hidden border-2 border-wedding-gold/40 shadow-inner aspect-square w-full">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Info */}
            <div className="text-center mt-4 pt-2">
              <div className="inline-block px-3 py-0.5 rounded-full bg-wedding-gold/20 text-wedding-maroon-dark text-xs font-serif font-bold uppercase tracking-wider mb-1">
                {activeImage.accentTag}
              </div>

              <h3 className="font-serif text-2xl font-bold text-wedding-maroon-dark">
                {activeImage.title}
              </h3>
              <p className="font-hindi text-sm text-stone-600">
                {activeImage.hindiTitle}
              </p>

              <p className="font-serif italic text-stone-700 text-sm mt-2 max-w-md mx-auto">
                {activeImage.description}
              </p>

              <div className="mt-4 pt-3 border-t border-wedding-gold/30 flex items-center justify-center gap-2 text-xs font-serif text-stone-500">
                <Heart className="w-3.5 h-3.5 text-wedding-maroon fill-wedding-maroon" />
                <span>Tanish Raj &amp; Prachi Arya Wedding • 04 Dec 2026</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
