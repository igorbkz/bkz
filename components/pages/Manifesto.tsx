import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas tracking-wider text-gray-200 uppercase animate-fade-in-down">
          Olá, mundo!
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Forjando a próxima geração de IA, uma falha de cada vez.
        </p>
      </div>
    </div>
  );
};

export default Manifesto;