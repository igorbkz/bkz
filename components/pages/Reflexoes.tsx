import React from 'react';

const quotes = [
  {
    text: 'Produtos de IA precisam soar humanos. A tecnologia vem depois.',
  },
  {
    text: 'Pequenas entregas semanais criam confiança e mantêm a equipe animada.',
  },
  {
    text: 'Documentação leve é melhor do que alinhamentos infinitos.',
  },
];

const Reflexoes: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Notas rápidas</h2>
        <p className="max-w-2xl text-sm text-slate-600">Observações que me guiam no dia a dia.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {quotes.map((quote) => (
          <div key={quote.text} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-700">{quote.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reflexoes;
