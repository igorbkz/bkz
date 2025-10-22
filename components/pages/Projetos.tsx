import React from 'react';

const projects = [
  {
    title: 'Estúdio de agentes',
    summary: 'Designer de fluxos conversacionais com respostas cordiais por padrão.',
    highlight: 'Versão beta em 6 semanas com NPS 82.',
  },
  {
    title: 'Painel de aprendizado',
    summary: 'Plataforma que mostra sinais de uso e sugere próximos experimentos.',
    highlight: 'Roadmap semanal decidido com mais confiança.',
  },
  {
    title: 'Workspace multimodal',
    summary: 'Editor colaborativo com IA para equipes remotas.',
    highlight: 'Redução de 40% no retrabalho de lançamentos.',
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
          <article key={project.title} className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">{project.title}</h3>
            <p className="text-sm text-slate-600">{project.summary}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-500">{project.highlight}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
