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
        <meta name="description" content="Empresa líder en servicios de seguridad profesional. Protegemos lo que más valoras con tecnología avanzada y personal altamente capacitado." />
      </Helmet>
      <div className="min-h-screen bg-slate-50">
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