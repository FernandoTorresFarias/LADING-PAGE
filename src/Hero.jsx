import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from './button.jsx';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Seguridad Profesional 24/7</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Protegemos lo que más <span className="text-gradient">valoras</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Soluciones integrales de seguridad con tecnología de vanguardia y personal altamente capacitado. Tu tranquilidad es nuestra prioridad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={scrollToContact} size="lg" variant="outline" className="text-lg border-2">
                Conocer Más
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">

              <img alt="Equipo de seguridad profesional monitoreando sistemas" src="https://images.unsplash.com/photo-1688413399498-e35ed74b554f" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">99.9%</p>
                  <p className="text-sm text-slate-600">Efectividad</p>
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