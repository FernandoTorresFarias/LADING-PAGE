import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import GuardianIcon from "./assets/guardian.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* 🔥 BARRA DORADA ENERGIZADA */}
      <motion.div
        animate={{
          width: "100%",
          opacity: isScrolled ? 1 : 0.4,
          boxShadow: isScrolled
            ? "0 0 20px rgba(245,197,24,0.9)"
            : "0 0 7px rgba(245,197,24,0.4)",
        }}
        transition={{ duration: 1 }}
        className="fixed top-[64px] left-0 h-[3px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 z-[60]"
      />

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`
          fixed top-0 left-0 right-0 z-50 h-16 flex items-center
          backdrop-blur-xl
          transition-all duration-500
          ${isScrolled
            ? "bg-black/85 shadow-[0_0_25px_rgba(245,197,24,0.35)] border-b border-yellow-500/40"
            : "bg-black/70 border-b border-yellow-400/20"}
        `}
      >
        <nav className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">

            {/* ⭐ LOGO CON HALO DORADO */}
            <div className="flex items-center space-x-3">
              <motion.img
                src={GuardianIcon}
                animate={{
                  scale: isScrolled ? 0.85 : 1,
                  filter: isScrolled
                    ? "drop-shadow(0 0 18px rgba(255,215,0,0.8))"
                    : "drop-shadow(0 0 10px rgba(255,215,0,0.5))",
                }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 object-contain"
                alt="Guardian Icon"
              />

              {/* ✨ TEXTO GOLD METAL */}
              <motion.span
                animate={{
                  textShadow:
                    "0 0 10px rgba(245,197,24,0.6), 0 0 20px rgba(245,197,24,0.4)",
                  color: isScrolled ? "#fff" : "#f5c518",
                }}
                className="
                  text-2xl font-bold select-none tracking-wide
                  transition-all duration-500 
                "
              >
                Guardian De Acero
              </motion.span>
            </div>

            {/* ⭐ MENÚ DESKTOP GOLD */}
            <div className="hidden md:flex items-center space-x-10">

              {[
                ["Servicios", "servicios"],
                ["Características", "caracteristicas"],
                ["Contacto", "contacto"],
              ].map(([label, section]) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  whileHover={{
                    scale: 1.1,
                    color: "#f5c518",
                    textShadow: "0 0 12px rgba(245,197,24,0.9)",
                  }}
                  className="
                    text-gray-200 font-medium transition-all
                  "
                >
                  {label}
                </motion.button>
              ))}

              {/* 🟨 BOTÓN DORADO PREMIUM */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="
                    bg-[var(--gold)]
                    hover:bg-[var(--gold-dark)]
                    text-black font-semibold
                    shadow-[0_0_20px_rgba(245,197,24,0.8)]
                    hover:shadow-[0_0_25px_rgba(245,197,24,1)]
                    transition-all
                  "
                >
                  Solicitar Cotización
                </Button>
              </motion.div>
            </div>

            {/* 📱 MENÚ MOBILE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-yellow-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* MENÚ MOBILE */}
{isMobileMenuOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="
      md:hidden 
      mt-4 pb-4 space-y-4

      /* 🔥 FONDO MOBILE PREMIUM */
      bg-black/100 
      backdrop-blur-xl 

      border-t border-yellow-500/40
      shadow-[0_0_20px_rgba(245,197,24,0.3)]

      rounded-xl
      p-6
    "
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
      className="
        w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold
        shadow-[0_0_10px_rgba(245,197,24,0.8)]
      "
    >
      Solicitar Cotización
    </Button>
  </motion.div>
)}

    
        </nav>
      </motion.header>
    </>
  );
};

export default Header;