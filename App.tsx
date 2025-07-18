import React from 'react';
import Manifesto from './components/pages/Manifesto';
import Projetos from './components/pages/Projetos';
import Reflexoes from './components/pages/Reflexoes';
import Contato from './components/pages/Contato';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <main className="container mx-auto px-4 md:px-8">
        <section id="manifesto">
          <Manifesto />
        </section>
        <div className="pt-24" id="projetos">
          <Projetos />
        </div>
        <div className="pt-24" id="reflexoes">
          <Reflexoes />
        </div>
        <div className="pt-24" id="contato">
          <Contato />
        </div>
      </main>
      <Chatbot />
    </div>
  );
};

export default App;