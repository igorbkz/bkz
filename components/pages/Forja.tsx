import React from 'react';

const pillars = [
  {
    title: 'Pesquisa indomável',
    description: 'Leio papers, registro bugs emocionais, testo hipóteses em poucas horas. Se pode ser automatizado, eu automatizo. Se pode ser sentido, eu prototipo.',
    artifacts: ['Modelos proprietários', 'Sistemas de logging narrativo', 'Diários de uso com clientes reais'],
  },
  {
    title: 'Design que respira',
    description: 'Interfaces cinéticas, foco absoluto no ritmo da conversa e detalhes que fazem a IA parecer presente.',
    artifacts: ['Design systems mutantes', 'Motion inspirado em música', 'Storytelling aplicado a UI'],
  },
  {
    title: 'Entrega sem burocracia',
    description: 'Deploy contínuo, métricas vivas, squads enxutas. O laboratório funciona como uma banda tocando ao vivo.',
    artifacts: ['Feature flags em minutos', 'Análises em Notion + Supabase', 'Roadmaps que cabem em uma página'],
  },
];

const sprints = [
  {
    phase: 'Sprint 0',
    focus: 'O cheiro do futuro',
    notes:
      'Entrevistas densas, imersão no problema e mapeamento dos extremos. Se o desafio não arrepia, não entra.',
    output: ['Manifesto do produto', 'Moodboards e sons', 'Mapa de riscos éticos'],
  },
  {
    phase: 'Sprint 1',
    focus: 'Prototipagem radical',
    notes:
      'Construo versões cruas que podem quebrar na sua mão. Quero fricção, quero feedback sincero, quero prova de vida.',
    output: ['MVP navegável', 'IA em modo caos', 'Painel de observabilidade'],
  },
  {
    phase: 'Sprint ∞',
    focus: 'Escala com alma',
    notes:
      'Infra resiliente, automações na veia e narrativas que convidam as pessoas a fazer parte. Crescer sem virar commodity.',
    output: ['Frameworks de expansão', 'Experiências multicanais', 'Lançamentos coordenados'],
  },
];

const Forja: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-mono uppercase tracking-[0.4rem] text-gray-500">Processo</p>
        <h2 className="text-3xl font-display uppercase tracking-[0.35rem] text-white sm:text-5xl">Como a forja trabalha</h2>
        <p className="max-w-3xl text-sm text-gray-400 sm:text-base">
          Tudo nasce do atrito entre pesquisa profunda e execução agressiva. Não existe etapa invisível: cada sprint tem música, cheiro e métricas. A forja está aberta 24/7.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="card-glow relative rounded-3xl border border-gray-900/60 bg-black/50 p-6"
          >
            <h3 className="text-xl font-display uppercase tracking-[0.3rem] text-white">{pillar.title}</h3>
            <p className="mt-3 text-sm text-gray-300">{pillar.description}</p>
            <ul className="mt-6 space-y-2 text-xs font-mono uppercase tracking-[0.3rem] text-gray-500">
              {pillar.artifacts.map((artifact) => (
                <li key={artifact} className="flex items-center gap-3">
                  <span className="h-1 w-8 bg-gradient-to-r from-ember to-aurora" aria-hidden="true" />
                  {artifact}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <div className="card-glow relative overflow-hidden rounded-3xl border border-gray-900/60 bg-gradient-to-br from-gray-950/80 via-gray-950/40 to-gray-900/60 p-8">
          <div className="absolute -top-20 right-10 h-48 w-48 rounded-full bg-aurora/20 blur-3xl" aria-hidden="true" />
          <h3 className="text-2xl font-display uppercase tracking-[0.3rem] text-white">Ritual da semana</h3>
          <p className="mt-4 text-sm text-gray-300">
            Segunda é para teoria. Terça, protótipo. Quarta, validação com usuários reais. Quinta, refino. Sexta é demo day interno. O ciclo recomeça no sábado com pesquisa. Quem disse que futuro tira folga?
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-900/60 bg-black/40 p-4">
              <p className="text-xs font-mono uppercase tracking-[0.4rem] text-gray-500">Stack base</p>
              <p className="mt-2 text-sm text-gray-200">TypeScript • Vite • Supabase • IA proprietária • Cloudflare</p>
            </div>
            <div className="rounded-2xl border border-gray-900/60 bg-black/40 p-4">
              <p className="text-xs font-mono uppercase tracking-[0.4rem] text-gray-500">Ferramentas</p>
              <p className="mt-2 text-sm text-gray-200">Linear, Notion, Figma, Runway, Reaper, ruído branco em 432hz</p>
            </div>
          </div>
        </div>

        <div className="card-glow relative h-full rounded-3xl border border-gray-900/60 bg-black/60 p-6">
          <h3 className="text-xl font-display uppercase tracking-[0.3rem] text-white">Blueprint de lançamento</h3>
          <div className="mt-6 space-y-6">
            {sprints.map((sprint) => (
              <div key={sprint.phase}>
                <div className="flex items-baseline justify-between text-xs font-mono uppercase tracking-[0.35rem] text-gray-500">
                  <span>{sprint.phase}</span>
                  <span className="text-white">{sprint.focus}</span>
                </div>
                <p className="mt-3 text-sm text-gray-300">{sprint.notes}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-[0.65rem] font-mono uppercase tracking-[0.3rem] text-gray-500">
                  {sprint.output.map((item) => (
                    <li key={item} className="rounded-full border border-gray-800 px-3 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forja;
