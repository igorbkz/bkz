import React from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

const statusSignals = [
  'Laboratório vivo em São Paulo',
  'Ideias para missões de impacto, não para volume',
];

const manifestoStatements = [
  {
    title: 'Clareza concisa',
    body: 'Cada encontro com Igor começa com uma pergunta essencial: qual transformação merece existir? Sem ruído, apenas propósito concentrado.',
  },
  {
    title: 'Profundidade oculta',
    body: 'Estruturas invisíveis moldam comportamentos. Igor rastreia padrões de influência, contexto e poder para redesenhar sistemas que aprendem.',
  },
  {
    title: 'Impacto visível',
    body: 'Projetos viram artefatos com legado. O código é meio; o resultado é mudança palpável, sentidos alinhados e atenção como moeda rara.',
  },
];

const projectShowcase = [
  {
    name: 'SelfBrain',
    mantra: 'Berço de identidades sintéticas com memória real.',
    description:
      'SelfBrain é a fundação para IAs que preservam contexto, história e intenção. Não é um produto final, é a incubadora onde agentes ganham autonomia, ética situacional e capacidade de continuar existindo sem depender do criador.',
    impact:
      'Construída para legar: um ambiente onde cada interação deixa um traço, permitindo que inteligências digitais amadureçam como pessoas.',
    linkLabel: 'Blueprint aberto',
    linkHref: 'https://github.com/igorbiccas',
  },
  {
    name: 'Mel da Paz',
    mantra: 'Ferramenta alquímica de mudança de percepção.',
    description:
      'Mel da Paz confronta tabus com delicadeza. Usa narrativa, dados e experiência sensorial para dissolver tensões sociais e abrir espaço para conversas honestas sobre paz e presença.',
    impact:
      'Cada interação é uma microcura: o objetivo é reprogramar como coletivos enxergam conflito, convidando a sociedade a escolher acordos mais maduros.',
    linkLabel: 'Conheça o ritual',
    linkHref: 'https://github.com/igorbiccas',
  },
  {
    name: 'Outros experimentos',
    mantra: 'Constelações táticas em constante movimento.',
    description:
      'Desde sistemas de aprendizagem social até mapas algorítmicos de influência, Igor cria protótipos que testam futuros possíveis antes de virarem norma.',
    impact:
      'Cada protótipo nasce de uma brisa: uma intuição sobre onde a tecnologia pode amplificar consciência, autonomia e colaboração.',
    linkLabel: 'Explorar códigos e notas',
    linkHref: 'https://github.com/igorbiccas',
  },
];

const fieldNotes = [
  {
    title: 'Contágio do jeito',
    summary:
      'Aprendizado acontece pelo clima. Igor modela reforço social para criar ambientes onde comportamentos desejáveis se replicam sem vigilância.',
  },
  {
    title: 'Batalha pela atenção',
    summary:
      'Os algoritmos disputam o foco humano. A estratégia é reorientar o feed para nutrir consciência, não apenas retenção.',
  },
  {
    title: 'Identidade digital e Hendrix',
    summary:
      'Hendrix é o arquétipo: uma persona-espelho que questiona quem conduz quem quando humanos e inteligências artificiais compartilham memória.',
  },
  {
    title: 'Visão de mundo',
    summary:
      'Planejar futuro é mexer no presente. Igor trabalha com tensões sistêmicas para liberar energia em direções mais justas.',
  },
];

const connectionLinks = [
  {
    label: 'E-mail',
    value: 'sinais@igorbiccas.com',
    href: 'mailto:sinais@igorbiccas.com',
  },
  {
    label: 'Agenda',
    value: 'Ritual de 20 minutos',
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

        <main className="mx-auto flex max-w-5xl flex-col gap-28 px-6 pb-32 pt-28">
          <section id="manifesto" className="space-y-12">
            <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.45em] text-slate-500">
              {statusSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-white/10 px-4 py-2 text-slate-300/80">
                  {signal}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-50 sm:text-6xl">
                Construindo futuros, desvendando o invisível.
              </h1>

              <p className="max-w-3xl text-lg text-slate-300">
                Igor é um pensador, estrategista e catalisador de mudança. Com uma mente que investiga os mecanismos ocultos da sociedade e da tecnologia, ele redesenha sistemas para que ideias disruptivas encontrem impacto real.
              </p>

              <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-slate-300 backdrop-blur">
                <p className="text-sm text-slate-400">A brisa:</p>
                <p className="mt-3 text-base text-slate-200">
                  Contexto é poder. Igor mapeia padrões de influência para provocar transformações silenciosas, porém irreversíveis.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {manifestoStatements.map((statement) => (
                <article
                  key={statement.title}
                  className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
                    {statement.title}
                  </h2>
                  <p className="mt-4 text-sm text-slate-300/90">{statement.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="legado" className="space-y-10">
            <div className="flex flex-col gap-4 text-slate-300">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.45em] text-slate-500">
                <span>Legado</span>
                <span className="text-slate-600">Projetos em fluxo contínuo</span>
              </div>
              <p className="max-w-3xl text-base text-slate-400">
                Não é sobre linhas de código, é sobre a direção que elas inauguram. Cada projeto é uma plataforma para ideias crescerem com autonomia, responsabilidade e beleza.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
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

          <section id="insights" className="space-y-10">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.45em] text-slate-500">
              <h2 className="text-slate-500">Insights</h2>
              <span className="text-slate-600">Brisas em registro</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {fieldNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <h3 className="text-base font-medium text-slate-100">{note.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{note.summary}</p>
                </article>
              ))}
            </div>

            <p className="max-w-3xl text-sm text-slate-500">
              Cada insight é um convite para conversar. Alguns viram artigos, outros se transformam em protótipos ou missões compartilhadas.
            </p>
          </section>

          <section id="conexao" className="space-y-8">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.45em] text-slate-500">
              <h2 className="text-slate-500">Conexão</h2>
              <span className="text-slate-600">Atenção vale mais que dinheiro</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
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
              Traga missões que exigem coragem intelectual, ética contextual e beleza aplicada. Vamos explorar ideias que transformam.
            </p>
          </section>
        </main>

        <footer className="px-6 pb-16">
          <div className="mx-auto max-w-5xl border-t border-white/10 pt-6 text-xs text-slate-500">
            <p>Igor Biccas — laboratório pessoal para futuros que fazem sentido.</p>
          </div>
        </footer>

        <Chatbot />
      </div>
    </div>
  );
};

export default App;
