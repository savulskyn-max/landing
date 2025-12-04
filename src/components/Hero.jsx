import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleCTA = () => {
    window.open('https://wa.me/', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#ED7C00] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#325F6F] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <img
                src="https://horizons-cdn.hostinger.com/755dd77c-8478-4a0d-820e-434c6802669e/d2ce17b35ba5927b4419f063d4e568b3.png"
                alt="Alpha IT Logo"
                className="h-10 w-auto"
              />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            >
              Revolucioná tu negocio con{' '}
              <span className="text-[#ED7C00]">Inteligencia Artificial</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-raleway text-lg sm:text-xl text-[#CDD4DA] mb-8 leading-relaxed"
            >
              Sistema de gestión integral para tiendas de ropa potenciado por IA.
              Automatizá tu negocio, aumentá tus ventas y optimizá tu tiempo.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleCTA}
                className="bg-[#ED7C00] hover:bg-[#ED7C00]/90 text-white font-raleway font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-[#ED7C00]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#ED7C00]/30 hover:scale-105 flex items-center justify-center"
              >
                Contactar por WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-8 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ED7C00] rounded-full animate-pulse" />
                <span className="text-[#CDD4DA] font-raleway text-sm">
                  100% Automatizado
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ED7C00] rounded-full animate-pulse" />
                <span className="text-[#CDD4DA] font-raleway text-sm">
                  IA Integrada
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ED7C00] rounded-full animate-pulse" />
                <span className="text-[#CDD4DA] font-raleway text-sm">
                  Soporte 24/7
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED7C00]/20 to-[#325F6F]/20 rounded-2xl blur-2xl" />

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-[#325F6F]/20 to-[#132229]/40 backdrop-blur-sm rounded-2xl p-4 border border-[#325F6F]/30"
              >
                <img
                  src="https://horizons-cdn.hostinger.com/755dd77c-8478-4a0d-820e-434c6802669e/logos-alpha-it-01-vxUNQ.png"
                  alt="Alpha IT - AI-powered clothing store management dashboard interface"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-[#ED7C00] text-white px-6 py-3 rounded-full shadow-lg font-space-grotesk font-bold"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                IA Potenciada
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
