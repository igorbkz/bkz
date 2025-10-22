import React from 'react';

const Contato: React.FC = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Vamos conversar</h2>
      <p className="mt-3 max-w-xl text-sm text-slate-600">
        Conte-me sobre a próxima ideia que precisa ganhar vida. Respondo em até um dia útil.
      </p>
      <div className="mt-6 space-y-4 text-sm text-slate-700">
        <a href="mailto:oi@igorbiccas.com" className="block rounded-full bg-slate-900 px-4 py-3 text-center text-white transition-colors hover:bg-slate-700">
          oi@igorbiccas.com
        </a>
        <a
          href="https://cal.com/igorbiccas/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full border border-slate-300 px-4 py-3 text-center text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
        >
          Marcar uma chamada de 30 minutos ↗
        </a>
      </div>
    </section>
  );
};

export default Contato;
