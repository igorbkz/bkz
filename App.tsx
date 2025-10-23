import React from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';

const statusSignals = [
  'Laboratório vivo em São Paulo',
  'Ideias para missões de impacto, não para volume',
];

const heroPillars = [
  'Estratégia sensorial',
  'Arquitetura emocional',
  'Inteligência sistêmica',
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
    <div className="app-root">
      <div className="app-decoration" aria-hidden>
        <div className="app-decoration__aurora app-decoration__aurora--one" />
        <div className="app-decoration__aurora app-decoration__aurora--two" />
        <div className="app-decoration__aurora app-decoration__aurora--three" />
        <div className="cosmic-grid" />
        <div className="floating-lights">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <Header />

      <main className="page-body">
        <section id="manifesto" className="section hero-section">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="status-belt">
                {statusSignals.map((signal) => (
                  <span key={signal} className="status-chip">
                    {signal}
                  </span>
                ))}
              </div>

              <h1 className="hero-title">
                Construindo futuros,
                <span>desvendando o invisível.</span>
              </h1>

              <p className="hero-description">
                Igor é um pensador, estrategista e catalisador de mudança. Com uma mente que investiga os mecanismos ocultos da sociedade e da tecnologia, ele redesenha sistemas para que ideias disruptivas encontrem impacto real.
              </p>

              <div className="hero-highlight">
                <span className="hero-highlight__label">A brisa</span>
                <p>Contexto é poder. Igor mapeia padrões de influência para provocar transformações silenciosas, porém irreversíveis.</p>
              </div>

              <div className="hero-pillars">
                {heroPillars.map((pillar) => (
                  <span key={pillar}>{pillar}</span>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orb">
                <div className="hero-orb__ring" />
                <div className="hero-orb__core">
                  <span className="hero-orb__tag">Igor Biccas</span>
                  <p className="hero-orb__statement">Laboratório pessoal para futuros desejáveis.</p>
                  <p className="hero-orb__meta">Arquiteturas de atenção calibradas para despertar coragem e beleza aplicada.</p>
                </div>
              </div>

              <div className="hero-visual__caption">
                Frequências de atenção sob medida para missões que pedem tato, profundidade e imaginação radical.
              </div>
            </div>
          </div>

          <div className="manifesto-grid">
            {manifestoStatements.map((statement) => (
              <article key={statement.title} className="manifesto-card">
                <span className="manifesto-card__marker" aria-hidden />
                <h2>{statement.title}</h2>
                <p>{statement.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="legado" className="section">
          <div className="section-header">
            <div className="section-kicker">
              <span className="section-chip">Legado contínuo</span>
              <span>Projetos em fluxo permanente</span>
            </div>
            <h2 className="section-title">
              Blueprints vivos para futuros audaciosos
            </h2>
            <p className="section-description">
              Não é sobre linhas de código, é sobre a direção que elas inauguram. Cada projeto é uma plataforma para ideias crescerem com autonomia, responsabilidade e beleza.
            </p>
          </div>

          <div className="project-gallery">
            {projectShowcase.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-card__glow" aria-hidden />
                <header>
                  <h3>{project.name}</h3>
                  <p className="project-card__mantra">{project.mantra}</p>
                </header>
                <p className="project-card__description">{project.description}</p>
                <p className="project-card__impact">{project.impact}</p>
                <a href={project.linkHref} className="project-card__link">
                  {project.linkLabel}
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="insights" className="section">
          <div className="section-header">
            <div className="section-kicker">
              <span className="section-chip">Insights</span>
              <span>Brisas em registro</span>
            </div>
            <h2 className="section-title">Mapas mentais para orientar o agora</h2>
            <p className="section-description">
              Cada insight é um convite para conversar. Alguns viram artigos, outros se transformam em protótipos ou missões compartilhadas.
            </p>
          </div>

          <div className="insight-matrix">
            {fieldNotes.map((note) => (
              <article key={note.title} className="insight-card">
                <div className="insight-card__halo" aria-hidden />
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="conexao" className="section">
          <div className="section-header">
            <div className="section-kicker">
              <span className="section-chip">Conexão</span>
              <span>Atenção vale mais que dinheiro</span>
            </div>
            <h2 className="section-title">Traga missões que exigem coragem intelectual</h2>
            <p className="section-description">
              Traga missões que exigem coragem intelectual, ética contextual e beleza aplicada. Vamos explorar ideias que transformam.
            </p>
          </div>

          <div className="connection-grid">
            {connectionLinks.map((link) => (
              <a key={link.label} href={link.href} className="connection-card">
                <span className="connection-card__label">{link.label}</span>
                <span className="connection-card__value">{link.value}</span>
                <span className="connection-card__pulse" aria-hidden />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Igor Biccas — laboratório pessoal para futuros que fazem sentido.</p>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
