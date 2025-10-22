import React from 'react';

const steps = [
  {
    title: 'Descoberta gentil',
    description: 'Escutar pessoas, entender contextos e resumir o essencial.',
  },
  {
    title: 'Prototipagem rápida',
    description: 'Explorar fluxos com IA em ciclos curtos e validáveis.',
  },
  {
    title: 'Lançamento calmo',
    description: 'Entrega contínua, métricas visíveis e suporte próximo.',
  },
];

const Forja: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Como trabalho</h2>
        <p className="max-w-2xl text-sm text-slate-600">Ciclos curtíssimos, sempre guiados por conversas claras e métricas reais.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">Ferramentas favoritas</h3>
        <p className="mt-2 text-sm text-slate-600">TypeScript, Vite, Supabase, Figma e muitas conversas em tempo real.</p>
      </div>
    </section>
  );
};

export default Forja;
