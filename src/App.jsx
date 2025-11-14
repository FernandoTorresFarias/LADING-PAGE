import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Services from './Services.jsx';
import Features from './Features.jsx';
import Stats from './Statas.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import { Toaster } from './toaster.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Guardian De Acero - Soluciones Profesionales de Seguridad</title>
        <meta
          name="description"
          content="Guardian De Acero SRL. Empresa de seguridad privada, monitoreo 24/7, guardias, videovigilancia y soluciones integrales."
        />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <Services />
        <Features />
        <Stats />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;