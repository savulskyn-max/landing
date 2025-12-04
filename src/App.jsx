import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Alpha IT - AI-Powered Clothing Store Management System</title>
        <meta
          name="description"
          content="Revolutionary clothing store management system with AI-powered data analysis, automatic management, ARCA billing integration, and Tienda Nube compatibility. Transform your business today."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="min-h-screen bg-[#132229]">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
