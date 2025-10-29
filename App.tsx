import React from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

const statusSignals = [
  'Laboratório vivo no Rio de Janeiro, Brasil',
  'Ideias para missões de impacto, não para volume',
];

const projectShowcase = [
  {
    name: 'SelfBrain',
    mantra: 'IA com memória contínua.',
    description:
      'SelfBrain é a base que Igor vem construindo para agentes digitais preservarem contexto real de trabalho.',
    impact:
      'Aplicada em fluxos que pedem continuidade: suporte a equipes, produtos e operações que dependem de histórico vivo.',
    linkLabel: 'Blueprint aberto',
    linkHref: 'https://github.com/igorbiccas',
  },
];

const connectionLinks = [
  {
    label: 'E-mail',
    value: 'sinais@igorbiccas.com',
    href: 'mailto:sinais@igorbiccas.com',
  },
  {
    label: 'X',
    value: '@igorbiccas',
    href: 'https://x.com/igorbiccas',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-280px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.16),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-200px] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.18),_transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="mx-auto flex max-w-5xl flex-col gap-28 px-6 pb-32 pt-28">
          <section className="space-y-12">
            <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.45em] text-slate-500">
              {statusSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-white/10 px-4 py-2 text-slate-300/80">
                  {signal}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-50 sm:text-6xl">
                Inteligência artificial para resolver trabalho real.
              </h1>

              <p className="max-w-3xl text-lg text-slate-300">
                Igor Biccas projeta e constrói produtos de IA. Pesquisa modelos, arquitetura e operações para colocar agentes em produção com responsabilidade e impacto direto no negócio.
              </p>
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex flex-col gap-4 text-slate-300">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.45em] text-slate-500">
                <span>Projetos</span>
                <span className="text-slate-600">Construção em andamento</span>
              </div>
              <p className="max-w-3xl text-base text-slate-400">
                A prioridade é aplicar IA de ponta onde existe missão clara e espaço para aprender com dados reais.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectShowcase.map((project) => (
                <article
                  key={project.name}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-slate-100">{project.name}</h3>
                      <p className="text-sm text-amber-300/80">{project.mantra}</p>
                    </div>
                    <p className="text-sm text-slate-300/90">{project.description}</p>
                    <p className="text-sm text-slate-400">{project.impact}</p>
                  </div>
                  <a
                    href={project.linkHref}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-white"
                  >
                    {project.linkLabel}
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>
          
          <section className="space-y-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.45em] text-slate-500">
              <h2 className="text-slate-500">Contato</h2>
              <span className="text-slate-600">Preferência por projetos de longo prazo</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {connectionLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-500">{link.label}</span>
                  <p className="mt-4 text-sm text-slate-100 group-hover:text-white">{link.value}</p>
                </a>
              ))}
            </div>

            <p className="max-w-3xl text-sm text-slate-400">
              Fale sobre desafios concretos em IA generativa, automação de conhecimento ou produtos que aprendem com dados.
            </p>
          </section>
        </main>

        <footer className="px-6 pb-16">
          <div className="mx-auto max-w-5xl border-t border-white/10 pt-6 text-xs text-slate-500">
            <p>Igor Biccas</p>
          </div>
        </footer>

        <Chatbot />
      </div>
    </div>
  );
};

export default App;
