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
    body:
      'Cada encontro com Igor começa com uma pergunta essencial: qual transformação merece existir? Sem ruído, apenas propósito concentrado.',
  },
  {
    title: 'Profundidade oculta',
    body:
      'Estruturas invisíveis moldam comportamentos. Igor rastreia padrões de influência, contexto e poder para redesenhar sistemas que aprendem.',
  },
  {
    title: 'Impacto visível',
    body:
      'Projetos viram artefatos com legado. O código é meio; o resultado é mudança palpável, sentidos alinhados e atenção como moeda rara.',
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
    <div className="relative min-h-screen overflow-hidden bg-[#03010f] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px]" />
        <div className="absolute left-[8%] top-[-240px] h-[520px] w-[520px] animate-breath rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.22),_transparent_65%)] blur-[140px]" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[540px] w-[620px] animate-breath rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.2),_transparent_70%)] blur-[150px]" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.18),_transparent_65%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-36 pt-28 md:pb-40 md:pt-32">
          <div className="flex flex-col gap-32">
            <section id="manifesto" className="space-y-16">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div className="space-y-10">
                  <div className="relative isolate flex flex-wrap gap-3 text-[0.6rem] uppercase tracking-[0.55em] text-slate-400">
                    <span className="absolute -left-12 top-1 hidden h-6 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block" />
                    {statusSignals.map((signal) => (
                      <span
                        key={signal}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-slate-200/80 shadow-[0_10px_35px_rgba(8,7,26,0.35)] backdrop-blur"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-8">
                    <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-50 sm:text-6xl">
                      <span className="bg-gradient-to-br from-sky-300 via-slate-100 to-amber-200 bg-clip-text text-transparent">
                        Construindo futuros, desvendando o invisível.
                      </span>
                    </h1>

                    <p className="max-w-3xl text-lg text-slate-300">
                      Igor é um pensador, estrategista e catalisador de mudança. Com uma mente que investiga os mecanismos ocultos da sociedade e da tecnologia, ele redesenha sistemas para que ideias disruptivas encontrem impacto real.
                    </p>

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_60px_rgba(8,7,26,0.55)] backdrop-blur">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_65%)] opacity-60" />
                      <div className="relative space-y-4">
                        <p className="text-sm font-mono uppercase tracking-[0.4em] text-slate-400">A brisa</p>
                        <p className="text-base text-slate-200">
                          Contexto é poder. Igor mapeia padrões de influência para provocar transformações silenciosas, porém irreversíveis.
                        </p>
                        <p className="text-sm text-slate-400">
                          Cada projeto nasce desse radar sensível: o desenho de experiências que magnetizam atenção qualificada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative space-y-6">
                  <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" aria-hidden="true" />
                  {manifestoStatements.map((statement, index) => (
                    <article
                      key={statement.title}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 pl-16 shadow-[0_16px_50px_rgba(8,7,26,0.5)] transition-transform duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      <span className="absolute left-6 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xs font-semibold text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
                        {statement.title}
                      </h2>
                      <p className="mt-4 text-sm text-slate-300/90">{statement.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="legado" className="space-y-12">
              <div className="flex flex-col gap-4 text-slate-300">
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.5em] text-slate-500">
                  <span className="text-slate-300/70">Legado</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.6rem] text-slate-400">Projetos em fluxo contínuo</span>
                </div>
                <p className="max-w-3xl text-base text-slate-400">
                  Não é sobre linhas de código, é sobre a direção que elas inauguram. Cada projeto é uma plataforma para ideias crescerem com autonomia, responsabilidade e beleza.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {projectShowcase.map((project) => (
                  <article
                    key={project.name}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_60px_rgba(8,7,26,0.55)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.35),_transparent_65%)] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_60%)]" />
                    </div>

                    <div className="relative space-y-5">
                      <div>
                        <h3 className="text-lg font-medium text-slate-50">{project.name}</h3>
                        <p className="text-sm text-amber-300/80">{project.mantra}</p>
                      </div>
                      <p className="text-sm text-slate-300/90">{project.description}</p>
                      <p className="text-sm text-slate-400">{project.impact}</p>
                    </div>
                    <a
                      href={project.linkHref}
                      className="relative mt-8 inline-flex items-center gap-3 text-sm font-medium text-slate-200 transition duration-300 hover:gap-4 hover:text-white"
                    >
                      {project.linkLabel}
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs"
                      >
                        →
                      </span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section id="insights" className="space-y-12">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.5em] text-slate-500">
                <h2 className="text-slate-400">Insights</h2>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.6rem] text-slate-400">Brisas em registro</span>
              </div>

              <div className="relative space-y-8">
                <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" aria-hidden="true" />
                {fieldNotes.map((note, index) => (
                  <article
                    key={note.title}
                    className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_50px_rgba(8,7,26,0.5)] transition duration-300 md:flex-row md:items-start md:gap-8 md:pl-16"
                  >
                    <div className="absolute left-6 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xs font-semibold text-slate-200 shadow-[0_0_18px_rgba(148,163,184,0.45)] md:flex">
                      0{index + 1}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-base font-medium text-slate-100">{note.title}</h3>
                      <p className="text-sm text-slate-400">{note.summary}</p>
                    </div>
                  </article>
                ))}
              </div>

              <p className="max-w-3xl text-sm text-slate-400">
                Cada insight é um convite para conversar. Alguns viram artigos, outros se transformam em protótipos ou missões compartilhadas.
              </p>
            </section>

            <section id="conexao" className="space-y-12">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.5em] text-slate-500">
                <h2 className="text-slate-400">Conexão</h2>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.6rem] text-slate-400">Atenção vale mais que dinheiro</span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {connectionLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_50px_rgba(8,7,26,0.5)] transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    <div className="absolute -inset-1 rounded-3xl border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="text-[0.65rem] uppercase tracking-[0.5em] text-slate-400">{link.label}</span>
                    <p className="mt-5 text-lg font-medium text-slate-100 transition group-hover:text-white">{link.value}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-500 group-hover:text-slate-300">
                      Abrir
                      <span aria-hidden="true">→</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_50px_rgba(8,7,26,0.5)] backdrop-blur">
                <p className="text-sm text-slate-400">
                  Traga missões que exigem coragem intelectual, ética contextual e beleza aplicada. Vamos explorar ideias que transformam.
                </p>
              </div>
            </section>
          </div>
        </main>

        <footer className="relative px-6 pb-16">
          <div className="mx-auto max-w-6xl rounded-full border border-white/10 bg-white/[0.02] px-6 py-6 text-xs text-slate-500 backdrop-blur">
            <p>Igor Biccas — laboratório pessoal para futuros que fazem sentido.</p>
          </div>
        </footer>

        <Chatbot />
      </div>
    </div>
  );
};

export default App;
