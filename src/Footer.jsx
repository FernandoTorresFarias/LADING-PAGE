import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">SecureGuard</span>
            </div>
            <p className="text-slate-400">
              Protegiendo lo que más valoras desde 2008
            </p>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Servicios</span>
            <ul className="space-y-2 text-slate-400">
              <li>Videovigilancia</li>
              <li>Seguridad Física</li>
              <li>Control de Acceso</li>
              <li>Alarmas</li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Empresa</span>
            <ul className="space-y-2 text-slate-400">
              <li>Sobre Nosotros</li>
              <li>Certificaciones</li>
              <li>Casos de Éxito</li>
              <li>Trabaja con Nosotros</li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Síguenos</span>
            <div className="flex space-x-4">
              <div className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 SecureGuard. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;