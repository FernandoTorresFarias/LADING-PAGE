import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.p
      className="text-lg text-yellow-400 font-semibold max-w-xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Protegemos lo que más valorás — tu seguridad es nuestra prioridad.
    </motion.p>
  );
};

export default CallToAction;