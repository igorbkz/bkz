import React from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

const projects = [
  {
    title: 'FlowCorp',
    description: 'Empresa que combina estratégia, produto e IA para negócios que querem impacto mensurável.',
  },
  {
    title: 'SelfBrain',
    description: 'Plataforma de copilotos privados para equipes que precisam de inteligência aplicada ao trabalho diário.',
  },
  {
    title: 'DataDoc',
    description: 'Ferramentas que transformam dados críticos em decisões claras para operações complexas.',
  },
];

const contactLinks = [
  {
    label: 'E-mail',
    value: 'igor@flowcorp.ai',
    href: 'mailto:igor@flowcorp.ai',
  },
  {
    label: 'X / Twitter',
    value: '@bkzflow',
    href: 'https://x.com/bkzflow',
  },
  {
    label: 'Site',
    value: 'flowcorp.ai',
    href: 'https://flowcorp.ai',
  },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100">
      <Header />

      <main className="mx-auto flex max-w-4xl flex-col gap-32 px-6 pb-32 pt-24">
        <section id="sobre" aria-labelledby="hero-heading" className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Rio de Janeiro · Brasil</p>
            <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Igor Biccas
            </h1>
            <h2 className="max-w-2xl text-xl text-slate-200 sm:text-2xl">
              Crio inteligência artificial que serve pessoas de verdade.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            Fundador da FlowCorp. Hoje lidero SelfBrain e DataDoc para entregar soluções de IA que resolvem o que importa com
            clareza e propósito. Trabalho direto com equipes que querem construir produtos e sistemas inteligentes sem perder a
            responsabilidade com quem usa.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="#projetos"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-slate-100 transition hover:border-white/40"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-slate-300 transition hover:border-white/30"
            >
              Falar comigo
            </a>
          </div>
        </section>

        <section id="projetos" aria-labelledby="projects-heading" className="space-y-8">
          <div>
            <h2 id="projects-heading" className="text-xs uppercase tracking-[0.4em] text-slate-500">
              Projetos
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-slate-200">
              Produtos e sistemas que estou construindo neste momento.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/30"
              >
                <h3 className="text-lg font-medium text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="visao" aria-labelledby="vision-heading" className="space-y-6">
          <h2 id="vision-heading" className="text-xs uppercase tracking-[0.4em] text-slate-500">
            Visão
          </h2>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-base leading-relaxed text-slate-300">
            <p>
              Tecnologia só faz sentido quando amplia a consciência humana. Cada produto que entrego usa IA para liberar tempo,
              clarear decisões e fortalecer quem precisa liderar mudanças reais.
            </p>
            <p>
              Trabalho com rigor técnico, empatia com o usuário e estratégia agressiva para construir o futuro da IA no Brasil.
              Nada de fumaça — apenas resultados que sustentem confiança no longo prazo.
            </p>
          </div>
        </section>

        <section id="contato" aria-labelledby="contact-heading" className="space-y-6">
          <h2 id="contact-heading" className="text-xs uppercase tracking-[0.4em] text-slate-500">
            Contato direto
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-3xl border border-white/15 bg-white/[0.02] p-6 transition hover:border-white/40"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{link.label}</span>
                <p className="mt-3 text-base text-slate-200">{link.value}</p>
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Se o projeto é sério e precisa de IA com responsabilidade, respondo pessoalmente.
          </p>
        </section>
      </main>

      <footer className="px-6 pb-16">
        <div className="mx-auto max-w-4xl border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Igor Biccas. Construindo IA com clareza e propósito.</p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
