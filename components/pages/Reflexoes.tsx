import React from 'react';

const quotes = [
  {
    title: 'Tom humano sempre',
    text: 'Interfaces com IA funcionam melhor quando soam gentis e úteis.',
  },
  {
    title: 'Ritmo semanal',
    text: 'Preferimos avanços curtos e frequentes para manter confiança.',
  },
  {
    title: 'Contexto leve',
    text: 'Notas vivas valem mais do que reuniões infinitas.',
  },
];

const Reflexoes: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Notas rápidas</h2>
        <p className="max-w-2xl text-sm text-slate-600">Observações curtas que guiam como desenho e lanço produtos.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {quotes.map((quote) => (
          <div key={quote.title} className="space-y-2 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{quote.title}</p>
            <p className="text-sm text-slate-700">{quote.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reflexoes;
