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

  //  WhatsApp únicamente
  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Hola! Mi nombre es ${formData.name}.
    Mensaje: ${formData.message}`;

    const numeroWhatsApp = "54900000000"; 

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
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Estamos listos para proteger lo que más te importa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* ✅ NO TOCAMOS ESTA PARTE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Teléfono</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-slate-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <p className="text-slate-600">info@secureguard.com</p>
                  <p className="text-slate-600">ventas@secureguard.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Dirección</h3>
                  <p className="text-slate-600">Av. Principal 123</p>
                  <p className="text-slate-600">Ciudad, País 12345</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Horario de Atención</h3>
                <p className="mb-2">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p className="mb-2">Sábados: 9:00 AM - 2:00 PM</p>
                <p className="font-semibold mt-4">Emergencias: 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* ✅ FORMULARIO SIMPLIFICADO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tus necesidades de seguridad..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Enviar Mensaje por WhatsApp
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
