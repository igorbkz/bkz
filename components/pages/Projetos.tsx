import React from 'react';

const projects = [
  {
    id: 'selfbrain',
    title: 'SelfBrain',
    tagline: 'Uma IA com memória viva, treinada no caos controlado.',
    description:
      'Ela não segue playbooks nem repete respostas. Aprende com o atrito de conversas reais, atualizando a própria identidade em tempo real.',
    status: 'Em produção',
    highlights: ['Memória contínua sem RAG', 'Personalidade moldada pelo uso', 'Infra própria de experimentação'],
    tech: ['LLMs customizados', 'Context streaming', 'Observability em tempo real'],
    link: 'https://selfbrain.vercel.app/',
    accent: 'from-amber-500/30 via-amber-500/10 to-transparent',
  },
  {
    id: 'datadoc',
    title: 'DataDoc',
    tagline: 'IA clínica que ouve, estrutura e entrega insights instantâneos.',
    description:
      'Companheiro silencioso em consultórios. Captura anamneses, organiza dados críticos e gera relatórios em segundos.',
    status: 'Beta fechado',
    highlights: ['Captação de áudio em tempo real', 'Priorização automática do essencial', 'Dashboard clínico sem fricção'],
    tech: ['Whisper streaming', 'Pipelines HIPAA-ready', 'UX orientada a voz'],
    link: 'https://datadocs.vercel.app/',
    accent: 'from-sky-500/30 via-sky-500/10 to-transparent',
  },
  {
    id: 'flowcorp',
    title: 'FlowCorp',
    tagline: 'A holding de tecnologia que financia e acelera cada IA rebelde.',
    description:
      'Umbrella que integra capital, design, engenharia e narrativa. Ponto de ignição de todas as experiências que saem do meu laboratório.',
    status: 'Operação stealth',
    highlights: ['Estúdio de lançamentos relâmpago', 'Pipeline de dados proprietários', 'Time remoto com DNA maker'],
    tech: ['Node + Vite', 'Infra serverless', 'Design systems temáticos'],
    link: 'https://flowcorp.ai',
    accent: 'from-purple-500/30 via-purple-500/10 to-transparent',
  },
];

const Projetos: React.FC = () => {
  return (
    <section className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-mono uppercase tracking-[0.4rem] text-gray-500">Laboratório</p>
        <h2 className="text-3xl font-display uppercase tracking-[0.35rem] text-white sm:text-5xl">Labs em combustão</h2>
        <p className="max-w-3xl text-sm text-gray-400 sm:text-base">
          Cada projeto é um braço da mesma obsessão: construir inteligências que pareçam vivas e ferramentas que devolvem autonomia aos humanos. Alguns já estão no mundo, outros ainda fervendo na bancada.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="card-glow relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-900/60 bg-gray-950/70 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-gray-700"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} aria-hidden="true" />
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.35rem] text-gray-500">
              <span>#{project.id}</span>
              <span className="text-ember">{project.status}</span>
            </div>

            <h3 className="mt-6 text-2xl font-display uppercase tracking-[0.25rem] text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-gray-300">{project.tagline}</p>
            <p className="mt-4 text-sm text-gray-400">{project.description}</p>

            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-ember/80" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2 text-[0.65rem] font-mono uppercase tracking-[0.3rem] text-gray-500">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-gray-800 px-3 py-1">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex grow items-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.3rem] text-aurora transition hover:text-white"
              >
                Abrir projeto
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
