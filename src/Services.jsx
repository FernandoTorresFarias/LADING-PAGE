import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera, Users, Lock, Bell, Smartphone } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Videovigilancia',
    description: 'Cámaras de alta definición con monitoreo 24/7 y almacenamiento seguro.'
  },
  {
    icon: Users,
    title: 'Seguridad Física',
    description: 'Guardias capacitados para la protección de accesos, perímetros y activos estratégicos.'
  },
  {
    icon: Lock,
    title: 'Control de Acceso',
    description: 'Sistemas biométricos, tarjetas inteligentes y registros de ingreso y egreso.'
  },
  {
    icon: Bell,
    title: 'Alarmas',
    description: 'Sistemas de alarma conectados con respuesta inmediata y notificaciones en tiempo real.'
  },
  {
    icon: Shield,
    title: 'Consultoría',
    description: 'Análisis de riesgos y diseño de planes de seguridad personalizados para cada cliente.'
  },
  {
    icon: Smartphone,
    title: 'Monitoreo Remoto',
    description: 'Supervisión desde dispositivos móviles con paneles de control intuitivos.'
  }
];

const Services = () => {
  return (
    <section
      id="servicios"
      className="py-16 bg-gradient-to-br from-[#020617] via-black to-[#020617]"
    >
      <div className="container mx-auto px-4">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Soluciones integrales de seguridad adaptadas a tus necesidades específicas
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}

                className="bg-[#050816] p-6 rounded-xl shadow-lg 
                border border-yellow-500/20 
                hover:border-yellow-400/60 
                transition-all duration-300"
              >
                
                {/* Icono */}
                <div className="bg-yellow-500/15 w-14 h-14 rounded-lg 
                flex items-center justify-center mb-4 
                border border-yellow-400/40">
                  <Icon className="w-7 h-7 text-yellow-400" />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;