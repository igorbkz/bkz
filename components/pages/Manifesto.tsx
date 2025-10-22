import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="space-y-10">
      <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
        Olá, eu sou Igor Biccas
      </p>

      <div className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Estratégia, código e design para experiências de IA calmas.
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Trabalho com equipes enxutas para transformar ideias em produtos que respeitam o tempo das pessoas. Cada entrega busca ser clara, gentil e rápida.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {["Produto", "Pesquisa", "Lançamentos"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-900">{item}</p>
            <p className="mt-2 text-sm text-slate-500">Bases sólidas, decisões leves e foco em impacto real.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manifesto;
