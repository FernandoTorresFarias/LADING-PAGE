import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from './button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">Guardian De Acero</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('servicios')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('caracteristicas')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Características
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </button>
            <Button onClick={() => scrollToSection('contacto')} className="bg-blue-600 hover:bg-blue-700">
              Solicitar Cotización
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('caracteristicas')} className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Características
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contacto
            </button>
            <Button onClick={() => scrollToSection('contacto')} className="w-full bg-blue-600 hover:bg-blue-700">
              Solicitar Cotización
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;