import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-8xl md:text-9xl font-bebas tracking-widest text-white animate-fade-in-down">
        BKZ
      </h1>
      <p className="mt-8 text-2xl md:text-3xl text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        Construo máquinas que pensam.
      </p>
      <p className="mt-2 text-lg md:text-xl text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        Em busca de um futuro melhor pra todos
      </p>
    </div>
  );
};

export default Manifesto;