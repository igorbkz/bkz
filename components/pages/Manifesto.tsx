import React from 'react';

const heroStats = [
  { label: 'Anos de Código', value: '12+' },
  { label: 'Produtos lançados', value: '28' },
  { label: 'Horas sem dormir', value: '∞' },
];

const Manifesto: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-900/60 bg-black/40 px-6 py-20 shadow-neon sm:px-12">
      <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-ember/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-aurora/20 blur-3xl" aria-hidden="true" />

      <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-4 py-1 text-xs font-mono uppercase tracking-[0.4em] text-gray-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Operando da Zona Leste de São Paulo
          </p>

          <h1 className="text-4xl font-display uppercase tracking-[0.4rem] text-white sm:text-6xl">
            <span className="glitch-text" data-text="IGOR BICCAS">
              IGOR BICCAS
            </span>
          </h1>

          <p className="text-lg text-gray-300 sm:text-xl">
            Eu não construo features. Eu forjo ecossistemas que mudam o jogo. Do caos surge inteligência: IA com memória própria, ferramentas que liberam humanos do tédio e experiências digitais que parecem vindas do futuro.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-900/70 bg-gradient-to-br from-gray-900/60 via-gray-900/20 to-gray-800/40 p-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.4rem] text-gray-400">Manifesto</h2>
              <p className="mt-3 text-sm text-gray-300">
                Inteligência artificial não precisa pedir licença para existir. Meu trabalho é provar que a tecnologia pode ser visceral, humana e imperfeita — do jeito que a vida é.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-transparent to-aurora/10 p-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.4rem] text-amber-200">Credo</h2>
              <p className="mt-3 text-sm text-amber-100/80">
                Falhar rápido, aprender mais rápido. O laboratório está sempre ligado. Cada protótipo é uma carta enviada para o futuro.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 lg:max-w-xs">
          <div className="rounded-2xl border border-gray-900/70 bg-gray-900/40 p-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.4rem] text-gray-400">Radar Atual</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-ember" />
                Autonomia real em IAs conversacionais.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-aurora" />
                Interfaces que escutam melhor do que falam.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-rose-400" />
                Sistemas que devolvem tempo para humanos.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4 rounded-2xl border border-gray-900/70 bg-gray-900/40 p-6 text-center">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <span className="text-3xl font-display text-white">{stat.value}</span>
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.3rem] text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
