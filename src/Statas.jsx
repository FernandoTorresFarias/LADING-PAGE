import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Clientes Satisfechos' },
  { number: '15+', label: 'Años de Experiencia' },
  { number: '24/7', label: 'Monitoreo Continuo' },
  { number: '99.9%', label: 'Tasa de Efectividad' }
];

const Stats = () => {
  return (
    <section className="py-20 bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2 text-yellow-400">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;