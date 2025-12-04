import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Sin costos de instalación',
  'Soporte técnico incluido',
  'Actualizaciones automáticas',
  'Capacitación personalizada'
];

const CTA = () => {
  const handleClick = () => {
    window.open('https://wa.me/543455463110', '_blank');
  };

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#ED7C00] opacity-10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#325F6F] opacity-10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#ED7C00]/20 via-[#325F6F]/10 to-[#132229]/40 backdrop-blur-sm p-12 rounded-3xl border border-[#ED7C00]/30"
        >

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#ED7C00] text-white px-6 py-2 rounded-full shadow-lg mb-6">
              <MessageCircle className="w-5 h-5" />
              <span className="font-space-grotesk font-semibold">
                Oferta Especial
              </span>
            </div>

            <h2 className="font-space-grotesk text-4xl lg:text-5xl font-bold text-white">
              Comenzá a transformar tu negocio{' '}
              <span className="text-[#ED7C00]">hoy mismo</span>
            </h2>

            <p className="font-raleway text-[#CDD4DA] max-w-2xl mx-auto mt-4">
              Unite a las tiendas que ya están revolucionando su gestión.
              Hablá con nuestro equipo.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 bg-[#325F6F]/10 p-4 rounded-lg border border-[#325F6F]/20"
              >
                <CheckCircle className="w-5 h-5 text-[#ED7C00]" />
                <span className="text-[#CDD4DA] font-raleway">{b}</span>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              onClick={handleClick}
              className="bg-[#ED7C00] hover:bg-[#ED7C00]/90 text-white font-raleway font-bold px-12 py-6 rounded-xl text-xl shadow-xl hover:scale-105 transition flex items-center mx-auto"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Contactar por WhatsApp
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>

            <p className="text-[#CDD4DA] font-raleway text-sm mt-4">
              Respuesta en menos de 24 horas • Consultoría gratuita
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
