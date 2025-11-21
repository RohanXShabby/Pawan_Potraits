import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: 'Selected Works', href: '#gallery' },
    { name: 'Artist', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 w-full z-50 px-6 py-8 transition-all duration-500 ${
        scrolled ? 'bg-slate-rich/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-[1800px] mx-auto">
        <a href="#" className="group relative z-50">
          <span className="font-serif text-2xl tracking-widest text-white font-light">VI</span>
          <span className="font-serif text-2xl tracking-widest text-gold italic">VAH</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-sans uppercase font-medium tracking-[0.25em] text-white/70 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-white hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-slate-rich flex flex-col justify-center items-center space-y-10 md:hidden z-40"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl font-serif italic text-white/80 hover:text-gold transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;