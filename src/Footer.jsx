import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import GuardianIcon from "./assets/guardian.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-yellow-500/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={GuardianIcon} className="w-14 h-14" alt="Guardian Icon" />
              <span className="text-2xl font-bold">Guardian De Acero</span>
            </div>
            <p className="text-gray-400">
              Servicios profesionales de seguridad privada y monitoreo integral.
            </p>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Servicios</span>
            <ul className="space-y-2 text-gray-400">
              <li>Videovigilancia</li>
              <li>Seguridad Física</li>
              <li>Control de Accesos</li>
              <li>Alarmas y Monitoreo</li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Empresa</span>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre Nosotros</li>
              <li>Certificaciones</li>
              <li>Casos de Éxito</li>
              <li>Trabajá con Nosotros</li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Seguinos</span>
            <div className="flex space-x-4">
  
  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61576882352359"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#111827] p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
  >
    <Facebook className="w-5 h-5" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/guardiandeacero.srl/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#111827] p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
  >
    <Instagram className="w-5 h-5" />
  </a>

</div>

          </div>
        </div>

        <div className="border-t border-[#111827] pt-8 text-center text-gray-500">
          <p>&copy; 2025 Guardian De Acero SRL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;