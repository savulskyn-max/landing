import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Gauge, FileText, ShoppingBag, MessageSquare, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Análisis de Datos con IA',
    description: 'Inteligencia artificial que analiza tus ventas, predice tendencias y te ayuda a tomar decisiones estratégicas basadas en datos reales.',
    color: '#ED7C00',
  },
  {
    icon: Gauge,
    title: 'Gestión Automática',
    description: 'Automatizá control de stock, actualizaciones de precios, y gestión de inventario. El sistema trabaja por vos las 24 horas.',
    color: '#325F6F',
  },
  {
    icon: FileText,
    title: 'Integración ARCA',
    description: 'Facturación electrónica integrada con ARCA (ex-AFIP). Emitir facturas nunca fue tan fácil y rápido.',
    color: '#ED7C00',
  },
  {
    icon: ShoppingBag,
    title: 'Tienda Nube Compatible',
    description: 'Sincronización automática con tu tienda online de Tienda Nube. Productos, stock y pedidos siempre actualizados.',
    color: '#325F6F',
  },
  {
    icon: MessageSquare,
    title: 'Bots de Redes Sociales',
    description: 'Automatización inteligente de publicaciones en Instagram, Facebook y otras plataformas para mantener tu presencia activa.',
    color: '#ED7C00',
  },
  {
    icon: Sparkles,
    title: 'Asistente IA 24/7',
    description: 'Tu asistente virtual responde consultas de clientes, gestiona pedidos y brinda atención personalizada en todo momento.',
    color: '#325F6F',
  },
];

const Features = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#132229] to-[#132229]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#ED7C00] bg-[#ED7C00]/10 px-4 py-2 rounded-full border border-[#ED7C00]/20 font-space-grotesk text-sm">
            Funcionalidades
          </span>

          <h2 className="font-space-grotesk text-4xl lg:text-5xl text-white font-bold mt-4">
            Todo lo que necesitás en <span className="text-[#ED7C00]">un solo lugar</span>
          </h2>

          <p className="text-[#CDD4DA] font-raleway mt-4 max-w-2xl mx-auto">
            Potenciá tu negocio con tecnología diseñada para tiendas de ropa.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-[#325F6F]/10 to-[#132229]/40 border border-[#325F6F]/20 rounded-2xl p-8 hover:border-[#ED7C00]/40 transition-all backdrop-blur-sm">

                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                    style={{ backgroundColor: `${feature.color}15` }}>
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>

                  <h3 className="text-xl font-space-grotesk text-white font-bold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-[#CDD4DA] font-raleway">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
