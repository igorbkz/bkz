import React from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

const signalWords = ['IA viva', 'Design como arma', 'Futuros prototipados', 'Alianças visionárias'];

const manifestoParagraphs = [
  'Construo sistemas que pensam, sentem e negociam com o desconhecido. O código é matéria espiritual.',
  'Estratégia não é slide — é coreografia entre dados, imaginação e guerra silenciosa por vantagem.',
  'Cada produto que lanço respira: responde, aprende, sustenta o tempo das pessoas que confiam nele.',
];

const currentFocus = [
  {
    title: 'Protocolos sensoriais',
    description: 'Interfaces que escutam contexto e modulam decisões em tempo real.',
  },
  {
    title: 'Modelos proprietários',
    description: 'IA autoral guiada por ética pragmática e poder discreto.',
  },
  {
    title: 'Ecossistemas parceiros',
    description: 'Coalizões com líderes que tratam tecnologia como extensão da consciência.',
  },
];

const contactSignals = [
  {
    label: 'Sinais cifrados',
    value: 'oi@igorbiccas.com',
    href: 'mailto:oi@igorbiccas.com',
  },
  {
    label: 'Sessões rápidas',
    value: 'Laboratório de 15 minutos',
    href: 'https://cal.com/',
  },
  {
    label: 'Transmissões',
    value: '@igorbiccas',
    href: 'https://x.com/igorbiccas',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-carbon text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-30%] top-[-40%] h-[520px] w-[520px] animate-breath rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.3),_transparent_70%)]" />
        <div
          className="absolute right-[-20%] top-1/3 h-[640px] w-[640px] animate-breath rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.28),_transparent_65%)]"
          style={{ animationDelay: '0.7s' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-60" />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="mx-auto flex max-w-5xl flex-col gap-28 px-6 pb-36 pt-24">
          <section className="space-y-10" aria-labelledby="hero-heading">
            <div className="flex flex-wrap items-center gap-4 text-[0.65rem] uppercase tracking-[0.55em] text-slate-500">
              <span className="rounded-full border border-white/10 px-4 py-2 text-slate-300/80">Laboratório Biccas</span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-slate-300/80">São Paulo → Mundo</span>
            </div>

            <h1
              id="hero-heading"
              className="max-w-4xl text-4xl font-semibold leading-[1.1] text-slate-50 sm:text-6xl lg:text-7xl"
            >
              Uma mente forjando inteligências silenciosas para quem investe no inevitável.
            </h1>

            <p className="max-w-2xl text-base text-slate-400">
              Sou Igor Biccas. Crio ecossistemas digitais que combinam IA própria, estratégia agressiva e uma estética sem ruído.
              Cada entrega é manifesto vivo — pensado para lideranças que veem tecnologia como extensão da consciência.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-slate-200/80">
              {signalWords.map((signal) => (
                <span
                  key={signal}
                  className="group relative overflow-hidden rounded-full border border-white/10 px-4 py-2"
                >
                  <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-aurora/20 to-ember/20 opacity-0 transition duration-700 group-hover:translate-y-0 group-hover:opacity-100" />
                  <span className="relative">{signal}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <a
                href="mailto:oi@igorbiccas.com"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 transition hover:border-white/40 hover:bg-white/10"
              >
                <span className="h-2 w-2 animate-pulse-soft rounded-full bg-ember" aria-hidden="true" />
                Conversar sobre o próximo protótipo inevitável
              </a>
              <span className="text-xs uppercase tracking-[0.4em] text-slate-500">Respostas em 24h</span>
            </div>
          </section>

          <section className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]" aria-labelledby="manifesto-heading">
            <div className="space-y-6">
              <h2 id="manifesto-heading" className="text-xs uppercase tracking-[0.55em] text-slate-500">
                Manifesto ativo
              </h2>
              <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
                {manifestoParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-slate-300">
                    {paragraph}
                  </p>
                ))}
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
                  <span className="text-[0.65rem] uppercase tracking-[0.55em]">Calma é estratégia</span>
                  <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 text-sm text-slate-400">
                <h3 className="text-[0.7rem] uppercase tracking-[0.5em] text-slate-500">Princípios de operação</h3>
                <ul className="mt-6 space-y-4">
                  <li>• IA proprietária moldada em projetos reais, não demos.</li>
                  <li>• Métricas orientadas por consciência do tempo e impacto cultural.</li>
                  <li>• Decisões guiadas por silêncio, dados e intuição treinada.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <h3 className="text-[0.7rem] uppercase tracking-[0.5em] text-slate-500">Pacto</h3>
                <p className="mt-4 text-sm text-slate-300">
                  Trabalhos apenas com quem honra profundidade, confidencialidade e coragem estética. Se for só aparência, não é aqui.
                </p>
              </div>
            </aside>
          </section>

          <section className="space-y-8" aria-labelledby="agora-heading">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-slate-500">
              <h2 id="agora-heading">Agora</h2>
              <span className="text-slate-600">Atualizado • 2024</span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {currentFocus.map((focus) => (
                <article
                  key={focus.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-500 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-aurora/10 via-transparent to-transparent opacity-0 transition duration-700 group-hover:translate-y-0 group-hover:opacity-100" />
                  <div className="relative">
                    <h3 className="text-sm font-medium text-slate-100">{focus.title}</h3>
                    <p className="mt-4 text-sm text-slate-400">{focus.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6" aria-labelledby="contato-heading">
            <div className="flex items-center justify-between">
              <h2 id="contato-heading" className="text-xs uppercase tracking-[0.55em] text-slate-500">
                Contato
              </h2>
              <span className="text-xs text-slate-600">Restrições: poucas vagas em 2024</span>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {contactSignals.map((signal) => (
                <a
                  key={signal.label}
                  href={signal.href}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-slate-300 transition hover:border-white/40 hover:bg-white/[0.08]"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.55em] text-slate-500">{signal.label}</span>
                  <p className="mt-4 text-base text-slate-100 group-hover:text-white">{signal.value}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 animate-pulse-soft rounded-full bg-aurora" aria-hidden="true" />
                    sinal aberto
                  </span>
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              Propostas onde cada segundo conta, onde estética e inteligência são a mesma coisa.
            </p>
          </section>
        </main>

        <footer className="px-6 pb-20">
          <div className="mx-auto max-w-5xl border-t border-white/10 pt-8 text-xs text-slate-500">
            <p>Igor Biccas — Construindo artefatos inevitáveis desde 2014.</p>
          </div>
        </footer>

        <Chatbot />
      </div>
    </div>
  );
};

export default App;
