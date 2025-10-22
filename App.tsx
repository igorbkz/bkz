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
    <div className="min-h-screen bg-cloud text-slate-900">
      <Header />

      <main className="mx-auto flex max-w-4xl flex-col gap-24 px-5 pb-32 pt-28 sm:gap-28 sm:px-10">
        <section id="manifesto" className="scroll-mt-28">
          <Manifesto />
        </section>
        <section id="projetos" className="scroll-mt-28">
          <Projetos />
        </section>
        <section id="forja" className="scroll-mt-28">
          <Forja />
        </section>
        <section id="reflexoes" className="scroll-mt-28">
          <Reflexoes />
        </section>
        <section id="contato" className="scroll-mt-28">
          <Contato />
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/60 py-8 text-center text-sm text-slate-500 backdrop-blur">
        © {new Date().getFullYear()} Igor Biccas. Projetos criados com calma e cuidado.
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
