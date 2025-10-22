import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="space-y-10">
      <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
        Olá, eu sou Igor Biccas
      </span>

      <div className="space-y-6">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Crio produtos de IA calmos para equipes que valorizam clareza.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Lidero ciclos curtos de descoberta, prototipagem e lançamento. O foco é entregar experiências suaves, com linguagem gentil e decisões informadas por dados reais.
        </p>
      </div>

      <dl className="grid gap-4 sm:grid-cols-3">
        {[{ label: 'Produto', value: 'Estratégia + UI', detail: 'Visão, fluxo e ritmo' }, { label: 'Pesquisa', value: 'Sinais de uso', detail: 'Testes com IA e pessoas' }, { label: 'Lançamento', value: 'Ritmo semanal', detail: 'Métricas e suporte próximo' }].map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{item.label}</dt>
            <dd className="mt-2 text-base font-semibold text-slate-900">{item.value}</dd>
            <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Manifesto;
