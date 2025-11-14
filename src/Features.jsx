import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Headphones, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Disponibilidad 24/7',
    description: 'Monitoreo continuo todos los días del año sin interrupciones.'
  },
  {
    icon: Award,
    title: 'Certificaciones',
    description: 'Personal certificado con los más altos estándares de la industria.'
  },
  {
    icon: Headphones,
    title: 'Soporte Inmediato',
    description: 'Equipo de respuesta rápida ante cualquier eventualidad.'
  },
  {
    icon: Zap,
    title: 'Tecnología Avanzada',
    description: 'Equipos de última generación con IA y análisis predictivo.'
  }
];

const Features = () => {
  return (
    <section id="caracteristicas" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Experiencia, tecnología y compromiso al servicio de tu seguridad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-blue-400/30">
                  <Icon className="w-10 h-10 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;