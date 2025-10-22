import React from 'react';

const steps = [
  {
    title: 'Descoberta',
    description: 'Escutamos pessoas, coletamos sinais e definimos o que realmente importa.',
  },
  {
    title: 'Prototipagem',
    description: 'Testes rápidos com IA para validar fluxos antes de investir pesado.',
  },
  {
    title: 'Lançamento',
    description: 'Entregas frequentes, métricas claras e muito acompanhamento próximo.',
  },
];

const Forja: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Como trabalho</h2>
        <p className="max-w-2xl text-sm text-slate-600">
          Um ciclo curto que mantém ritmo sem perder gentileza.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-medium text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-medium text-slate-900">Ferramentas favoritas</h3>
        <p className="mt-2 text-sm text-slate-600">
          TypeScript, Vite, Supabase, Figma e muitas conversas em tempo real.
        </p>
      </div>
    </section>
  );
};

export default Forja;
