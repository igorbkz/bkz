import React from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

const focusAreas = [
  {
    title: 'IA aplicada',
    description: 'Protótipos serenos com autonomia real.',
  },
  {
    title: 'Sistemas vivos',
    description: 'Fluxos que respondem ao contexto em tempo real.',
  },
  {
    title: 'Experiências calmas',
    description: 'Interfaces conversacionais que respiram.',
  },
];

const statusChips = ['Studio em São Paulo', 'Disponível para colaborações selecionadas'];

const microHighlights = ['Produtos digitais com IA', 'Pesquisa aplicada', 'Mentoria de times'];

const contactLinks = [
  {
    label: 'E-mail',
    value: 'oi@igorbiccas.com',
    href: 'mailto:oi@igorbiccas.com',
  },
  {
    label: 'Agenda',
    value: '15 min de laboratório',
    href: 'https://cal.com/',
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

        <main className="mx-auto flex max-w-4xl flex-col gap-24 px-6 pb-28 pt-24">
          <section id="perfil" className="space-y-10">
            <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.45em] text-slate-500">
              {statusChips.map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 px-4 py-2 text-slate-300/80">
                  {chip}
                </span>
              ))}
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-50 sm:text-6xl">
              Igor Biccas forja experiências de IA com silêncio, intenção e beleza.
            </h1>

            <p className="max-w-xl text-base text-slate-400">
              Produto, pesquisa e poesia para organizações que desejam tecnologia com alma.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-slate-300/80">
              {microHighlights.map((highlight) => (
                <span key={highlight} className="rounded-full border border-white/10 px-3 py-1.5">
                  {highlight}
                </span>
              ))}
            </div>
          </section>

          <section id="foco" className="space-y-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.45em] text-slate-500">
              <h2 className="text-slate-500">Agora</h2>
              <span className="text-slate-600">Atualizado • 2024</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <h3 className="text-sm font-medium text-slate-100">{area.title}</h3>
                  <p className="mt-4 text-sm text-slate-400">{area.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contato" className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.45em] text-slate-500">Contato</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.45em] text-slate-500">{link.label}</span>
                  <p className="mt-4 text-sm text-slate-100 group-hover:text-white">{link.value}</p>
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              Conversas curtas, projetos com propósito e parcerias que respeitam o tempo de todos.
            </p>
          </section>
        </main>

        <footer className="px-6 pb-16">
          <div className="mx-auto max-w-4xl border-t border-white/10 pt-6 text-xs text-slate-500">
            <p>Studio Biccas — artefatos digitais feitos com calma.</p>
          </div>
        </footer>

        <Chatbot />
      </div>
    </div>
  );
};

export default App;
