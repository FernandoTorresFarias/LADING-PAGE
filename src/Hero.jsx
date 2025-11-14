import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './button';
import GuardianIcon from './assets/guardian.png';
import Seguridadpng from './assets/seguridad.png'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* FONDO OSCURO PREMIUM */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#020617] to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-300/15 text-yellow-300 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-yellow-400/25">
              <img src={GuardianIcon} className="w-20 h-20" alt="Guardian Icon" />
              <span className="text-sm font-semibold">Seguridad Profesional 24/7</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Protegemos lo que más <span className="text-gradient">valoras</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Soluciones integrales de seguridad con tecnología moderna y personal altamente capacitado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-lg text-black font-semibold"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="text-lg border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black"
              >
                Conocer Más
              </Button>
            </div>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-yellow-500/30">
              <img src={Seguridadpng} className="w-200 h-200" alt="Icon" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#020617] p-6 rounded-xl shadow-xl border border-yellow-500/30">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500/20 p-3 rounded-full border border-yellow-400/60">
                  <img src={GuardianIcon} className="w-12 h-12" alt="Icon" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">99.9%</p>
                  <p className="text-sm text-gray-300">Efectividad</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;