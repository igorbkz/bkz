import React from 'react';
import Header from './components/Header';
import Manifesto from './components/pages/Manifesto';
import Projetos from './components/pages/Projetos';
import Forja from './components/pages/Forja';
import Reflexoes from './components/pages/Reflexoes';
import Contato from './components/pages/Contato';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-carbon text-gray-200">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="aurora -top-40 -left-32" aria-hidden="true" />
      <div className="aurora bottom-0 right-[-10%]" aria-hidden="true" />

      <Header />
      <main className="relative z-10 container mx-auto px-4 md:px-8">
        <section id="manifesto" className="pt-24">
          <Manifesto />
        </section>
        <section id="projetos" className="pt-32">
          <Projetos />
        </section>
        <section id="forja" className="pt-32">
          <Forja />
        </section>
        <section id="reflexoes" className="pt-32">
          <Reflexoes />
        </section>
        <section id="contato" className="pt-32 pb-32">
          <Contato />
        </section>
      </main>

      <footer className="relative z-10 border-t border-gray-900/70 bg-gradient-to-t from-black/80 via-black/60 to-transparent py-10 text-center text-sm text-gray-500">
        Feito à mão por Igor Biccas. Alimentado por café forte, ruído branco e uma fé teimosa no futuro.
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;

