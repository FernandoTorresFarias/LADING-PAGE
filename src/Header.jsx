import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './button';
import GuardianIcon from './assets/guardian.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-[#050509]/95 backdrop-blur-md
        border-b border-yellow-500/40
        shadow-[0_0_25px_rgba(250,204,21,0.35)]
      `}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
          <img
  src={GuardianIcon}
  className="w-20 h-20 object-contain brightness-125 drop-shadow-[0_0_12px_rgba(255,215,0,0.6)]"
  alt="Guardian Icon"
/>
            <span
  className=" 
    text-xl font-bold text-white
    drop-shadow-[0_0_6px_rgba(245,197,24,0.5)]
    transition-all duration-300
    hover:text-[var(--gold)]
    hover:drop-shadow-[0_0_15px_rgba(245,197,24,0.9)]
  "
>
  Guardian De Acero
</span>

          </div>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-slate-200 hover:text-yellow-400 transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('caracteristicas')}
              className="text-slate-200 hover:text-yellow-400 transition-colors font-medium"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-slate-200 hover:text-yellow-400 transition-colors font-medium"
            >
              Contacto
            </button>

            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-yellow-500 hover:bg-yellow-400 text-black"
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MENÚ MOBILE */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left text-slate-200 hover:text-yellow-400 transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('caracteristicas')}
              className="block w-full text-left text-slate-200 hover:text-yellow-400 transition-colors font-medium"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-slate-200 hover:text-yellow-400 transition-colors font-medium"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection('contacto')}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black"
            >
              Solicitar Cotización
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;