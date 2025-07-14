import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Manifesto from './components/pages/Manifesto';
import Projetos from './components/pages/Projetos';
import Reflexoes from './components/pages/Reflexoes';
import Contato from './components/pages/Contato';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-black text-gray-300">
        <Header />
        <main className="container mx-auto px-4 md:px-8 py-8">
          <Routes>
            <Route path="/" element={<Manifesto />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/reflexoes" element={<Reflexoes />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Chatbot />
      </div>
    </HashRouter>
  );
};

export default App;
