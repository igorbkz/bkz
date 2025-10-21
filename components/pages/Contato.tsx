import React from 'react';

const Contato: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-900/60 bg-black/60 p-10">
      <div className="absolute -top-32 right-10 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-aurora/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10 text-center">
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.4rem] text-gray-500">Chamado final</p>
          <h2 className="text-3xl font-display uppercase tracking-[0.35rem] text-white sm:text-5xl">
            Quer construir algo que ainda não existe?
          </h2>
          <p className="text-sm text-gray-300 sm:text-base">
            Me chame quando o projeto exigir coragem e precisão. Trabalhos com startups inquietas, squads enterprise que querem sair do tédio e artistas que não respeitam limites.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="mailto:igor@flowcorp.ai"
            className="inline-flex items-center gap-3 rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-3 text-sm font-mono uppercase tracking-[0.35rem] text-amber-100 transition hover:bg-amber-500/20"
          >
            <span aria-hidden="true">✉️</span>
            igor@flowcorp.ai
          </a>

          <a
            href="https://x.com/igorbiccas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-gray-800 px-6 py-3 text-sm font-mono uppercase tracking-[0.35rem] text-gray-300 transition hover:border-aurora/60 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 1200 1227"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z" />
            </svg>
            x.com/igorbiccas
          </a>
        </div>

        <p className="text-xs font-mono uppercase tracking-[0.4rem] text-gray-500">
          Agenda para mentorias, consultorias e co-criações de IA aberta.
        </p>
      </div>
    </section>
  );
};

export default Contato;
