import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, Headphones, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Disponibilidad 24/7',
    description: 'Monitoreo permanente los 365 días del año, sin interrupciones.'
  },
  {
    icon: Award,
    title: 'Certificaciones',
    description: 'Personal habilitado y capacitado según normativas vigentes.'
  },
  {
    icon: Headphones,
    title: 'Respuesta Inmediata',
    description: 'Atención y coordinación rápida ante cualquier evento.'
  },
  {
    icon: Zap,
    title: 'Tecnología Avanzada',
    description: 'Infraestructura moderna con sistemas inteligentes y analíticos.'
  }
];

const Features = () => {
  return (
    <section
      id="caracteristicas"
      className="py-20 bg-gradient-to-br from-black via-[#020617] to-black"
    >
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(245,197,24,0.2)]">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experiencia, tecnología y compromiso al servicio de tu seguridad.
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
                {/* ICONO */}
                <div className="bg-yellow-500/15 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-400/40 shadow-[0_0_12px_rgba(245,197,24,0.3)]">
                  <Icon className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_12px_rgba(245,197,24,0.8)]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;