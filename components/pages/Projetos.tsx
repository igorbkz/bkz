import React from 'react';

const projects = [
  {
    title: 'SelfBrain',
    description: 'Companheiro de IA que aprende com o time e mantém conversas fluidas.',
    link: 'https://selfbrain.vercel.app/',
  },
  {
    title: 'DataDoc',
    description: 'Notas clínicas automáticas, prontas logo após cada consulta.',
    link: 'https://datadocs.vercel.app/',
  },
  {
    title: 'FlowCorp',
    description: 'Estúdio para lançar produtos digitais com qualidade consistente.',
    link: 'https://flowcorp.ai',
  },
];

const Projetos: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900">Projetos recentes</h2>
        <p className="max-w-2xl text-sm text-slate-600">
          Uma seleção enxuta de iniciativas vivas. Todas compartilham o mesmo objetivo: produtos simples, úteis e agradáveis de usar.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-slate-900">{project.title}</h3>
              <p className="text-sm text-slate-600">{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Abrir projeto ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
