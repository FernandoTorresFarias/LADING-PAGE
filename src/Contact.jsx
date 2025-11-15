import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./button";
import { useToast } from "./use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Hola! Mi nombre es ${formData.name}.
Mensaje: ${formData.message}`;

    const numeroWhatsApp = "54900000000"; // <<--- poné tu número

    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );

    toast({
      title: "¡Mensaje enviado!",
      description: "Abrimos WhatsApp para continuar la conversación.",
    });

    setFormData({ name: "", message: "" });
  };

  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-b from-black to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-300">
            Estamos listos para proteger lo que más te importa.
          </p>
        </motion.div>

        {/* Contenedor */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Teléfono */}
            <div className="flex items-start space-x-4">
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                <Phone className="w-7 h-7 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Teléfono</h3>
                <p className="text-gray-300">+54 9 (3804) 23-1880</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                <Mail className="w-7 h-7 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-300">guardiandeacero.srl@gmail.com</p>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex items-start space-x-4">
              <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                <MapPin className="w-7 h-7 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dirección</h3>
                <p className="text-gray-300">Pueyrredón 81</p>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-700/10 p-8 rounded-2xl border border-yellow-500/30">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                Horario de Atención
              </h3>
              <p>Lunes - Viernes: 8:00 - 18:00</p>
              <p>Sábados: 9:00 - 14:00</p>
              <p className="mt-4 font-semibold">Emergencias: 24/7</p>
            </div>
          </motion.div>

          {/* FORMULARIO - FONDO NEGRO */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black p-10 rounded-2xl border border-yellow-500/20 shadow-2xl shadow-yellow-500/10"
          >
            <div className="space-y-8">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-200">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 text-white rounded-lg 
                         focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-200">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-black border border-yellow-500/30 text-white rounded-lg 
                         focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40"
                  placeholder="Cuéntanos tus necesidades de seguridad..."
                ></textarea>
              </div>

              {/* Botón */}
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-6 text-lg rounded-xl">
                Enviar Mensaje por WhatsApp
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
