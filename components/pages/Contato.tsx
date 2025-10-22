import React from 'react';

const Contato: React.FC = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">Vamos conversar</h2>
      <p className="mt-3 max-w-xl text-sm text-slate-600">Conte-me sobre a próxima ideia. Respondo em até um dia útil.</p>
      <div className="mt-6 flex flex-col gap-3 text-sm text-slate-700 sm:flex-row sm:gap-4">
        <a
          href="mailto:oi@igorbiccas.com"
          className="flex-1 rounded-full bg-slate-900 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-slate-700"
        >
          oi@igorbiccas.com
        </a>
        <a
          href="https://cal.com/igorbiccas/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-center font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
        >
          Agendar uma chamada ↗
        </a>
      </div>
    </section>
  );
};

export default Contato;
