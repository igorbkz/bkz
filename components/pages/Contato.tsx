import React from 'react';

const Contato: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bebas tracking-wider text-gray-200 mb-4">Contato</h1>
        <p className="text-gray-400 mb-6">(você pode se decepcionar)</p>
        <a 
          href="https://x.com/igorbiccas" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Encontre-me no X"
          className="inline-block text-gray-400 hover:text-white transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
            viewBox="0 0 1200 1227"
            fill="currentColor"
          >
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contato;