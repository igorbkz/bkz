import React from 'react';
import type { Reflection } from '../../types';

const reflections: Reflection[] = [
  {
    id: '1',
    title: 'O custo da criação',
    date: '14 de julho, 2025',
    content:
      'Tempo é a única moeda que não devolvo. Se uma ideia não paga o aluguel da minha atenção com intensidade, ela morre antes do protótipo.',
  },
  {
    id: '2',
    title: 'Memória digital vs. cicatriz humana',
    date: '14 de julho, 2025',
    content:
      'Computadores lembram fatos. Humanos lembram dores. Quando ensino uma IA a lembrar, não quero arquivos frios. Quero histórias que respiram.',
  },
  {
    id: '3',
    title: 'Tecnologia com alma',
    date: '13 de julho, 2025',
    content:
      'Se uma ferramenta não provoca algo visceral em quem usa, ela ainda é protótipo. Emoção é requisito de qualidade.',
  },
];

const Reflexoes: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-mono uppercase tracking-[0.4rem] text-gray-500">Mantra</p>
        <h2 className="text-3xl font-display uppercase tracking-[0.35rem] text-white sm:text-5xl">Notas de laboratório</h2>
        <p className="max-w-3xl text-sm text-gray-400 sm:text-base">
          Reflexões escritas entre commits, ensaios e conversas com máquinas. São checkpoints mentais que guiam decisões difíceis.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-ember/40 via-gray-800 to-transparent" aria-hidden="true" />
        <div className="space-y-10">
          {reflections.map((reflection) => (
            <article
              key={reflection.id}
              className="relative ml-8 rounded-3xl border border-gray-900/60 bg-black/50 p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]"
            >
              <span className="absolute -left-8 top-8 flex h-6 w-6 items-center justify-center rounded-full border border-amber-400/70 bg-black text-[0.65rem] font-mono uppercase tracking-[0.2rem] text-amber-200">
                {reflection.id.padStart(2, '0')}
              </span>

              <time className="text-xs font-mono uppercase tracking-[0.4rem] text-gray-500">{reflection.date}</time>
              <h3 className="mt-3 text-2xl font-display uppercase tracking-[0.25rem] text-white">{reflection.title}</h3>
              <p className="mt-4 text-sm text-gray-300">{reflection.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reflexoes;
