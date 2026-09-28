import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Sparkles, Menu, X, Home, Camera } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // Clear navbar height so section header is directly at top
      const navbarHeight = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-wedding-ivory/95 backdrop-blur-md shadow-sm border-b border-wedding-gold/30 py-2.5'
          : 'bg-wedding-ivory/80 backdrop-blur-sm py-3.5 border-b border-wedding-gold/20'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram / Title */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, 'top')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full border border-wedding-gold flex items-center justify-center bg-wedding-maroon text-wedding-gold font-display font-bold text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform">
            T&amp;P
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-sm sm:text-base font-bold tracking-wide text-wedding-maroon-dark">
              Tanish &amp; Prachi
            </span>
            <span className="font-hindi text-[10px] text-wedding-gold-dark -mt-1 font-semibold">
              शुभ विवाह
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-semibold">
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, 'top')}
            className="text-stone-700 hover:text-wedding-maroon transition-colors"
          >
            Home
          </a>
          <a
            href="#families"
            onClick={(e) => scrollToSection(e, 'families')}
            className="text-stone-700 hover:text-wedding-maroon transition-colors flex items-center gap-1"
          >
            <Users className="w-3.5 h-3.5 text-wedding-gold" />
            Families
          </a>
          <a
            href="#events"
            onClick={(e) => scrollToSection(e, 'events')}
            className="text-stone-700 hover:text-wedding-maroon transition-colors flex items-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5 text-wedding-gold" />
            Programme
          </a>
          <a
            href="#venue"
            onClick={(e) => scrollToSection(e, 'venue')}
            className="text-stone-700 hover:text-wedding-maroon transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-wedding-gold" />
            Venue
          </a>
          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, 'gallery')}
            className="text-stone-700 hover:text-wedding-maroon transition-colors flex items-center gap-1"
          >
            <Camera className="w-3.5 h-3.5 text-wedding-gold" />
            Gallery
          </a>
          <a
            href="#rsvp"
            onClick={(e) => scrollToSection(e, 'rsvp')}
            className="px-4 py-1.5 rounded-full border border-wedding-gold bg-wedding-maroon text-wedding-gold hover:bg-wedding-maroon-dark transition-all flex items-center gap-1 font-semibold shadow-sm"
          >
            <Sparkles className="w-3 h-3" />
            RSVP
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-wedding-maroon hover:bg-wedding-gold/10 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-wedding-ivory border-b border-wedding-gold/30 px-6 py-4 shadow-lg animate-[fadeIn_0.2s_ease-out]">
          <div className="flex flex-col space-y-3 text-sm font-serif font-semibold text-stone-800">
            <a
              href="#top"
              onClick={(e) => scrollToSection(e, 'top')}
              className="py-2 border-b border-wedding-gold/15 flex items-center gap-2 hover:text-wedding-maroon"
            >
              <Home className="w-4 h-4 text-wedding-gold" />
              <span>Home (Top)</span>
            </a>
            <a
              href="#families"
              onClick={(e) => scrollToSection(e, 'families')}
              className="py-2 border-b border-wedding-gold/15 flex items-center gap-2 hover:text-wedding-maroon"
            >
              <Users className="w-4 h-4 text-wedding-gold" />
              <span>Two Families (वर व वधू पक्ष)</span>
            </a>
            <a
              href="#events"
              onClick={(e) => scrollToSection(e, 'events')}
              className="py-2 border-b border-wedding-gold/15 flex items-center gap-2 hover:text-wedding-maroon"
            >
              <Calendar className="w-4 h-4 text-wedding-gold" />
              <span>Wedding Programme</span>
            </a>
            <a
              href="#venue"
              onClick={(e) => scrollToSection(e, 'venue')}
              className="py-2 border-b border-wedding-gold/15 flex items-center gap-2 hover:text-wedding-maroon"
            >
              <MapPin className="w-4 h-4 text-wedding-gold" />
              <span>Venue &amp; Location</span>
            </a>
            <a
              href="#gallery"
              onClick={(e) => scrollToSection(e, 'gallery')}
              className="py-2 border-b border-wedding-gold/15 flex items-center gap-2 hover:text-wedding-maroon"
            >
              <Camera className="w-4 h-4 text-wedding-gold" />
              <span>Photo Gallery</span>
            </a>
            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, 'rsvp')}
              className="py-2 flex items-center justify-center gap-2 rounded-xl bg-wedding-maroon text-wedding-gold font-bold shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirm RSVP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
