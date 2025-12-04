import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#132229] border-t border-[#325F6F]/20 py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-12 mb-8">

          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img
              src="https://horizons-cdn.hostinger.com/755dd77c-8478-4a0d-820e-434c6802669e/d2ce17b35ba5927b4419f063d4e568b3.png"
              className="h-10 mb-4"
            />
            <p className="text-[#CDD4DA] font-raleway text-sm">
              Sistema de gestión integral para tiendas de ropa potenciado por IA.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <span className="text-white font-space-grotesk font-semibold text-lg mb-4 block">
              Contacto
            </span>

            <div className="space-y-3 text-[#CDD4DA] font-raleway text-sm">
              <div className="flex items-center gap-3">
                <Mail className="text-[#ED7C00] w-4 h-4" />
                savulskyn@alphaitgroup.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#ED7C00] w-4 h-4" />
                +543455463110
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#ED7C00] w-4 h-4" />
                Córdoba, Argentina
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <span className="text-white font-space-grotesk font-semibold text-lg mb-4 block">
              Enlaces
            </span>

            <nav className="flex flex-col space-y-2 text-[#CDD4DA] font-raleway text-sm">
              <a href="#features" className="hover:text-[#ED7C00] transition">Funcionalidades</a>
              <a href="#pricing" className="hover:text-[#ED7C00] transition">Precios</a>
              <a href="#about" className="hover:text-[#ED7C00] transition">Nosotros</a>
              <a href="#contact" className="hover:text-[#ED7C00] transition">Contacto</a>
            </nav>
          </motion.div>

        </div>

        <div className="border-t border-[#325F6F]/20 pt-8 text-center md:text-left text-[#CDD4DA] font-raleway text-sm">
          © {currentYear} Alpha IT. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;

