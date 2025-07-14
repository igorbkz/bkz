import React from 'react';
import type { Reflection } from '../../types';

const reflections: Reflection[] = [
  {
    id: '1',
    title: 'O Custo da Criação',
    date: '14 de Julho, 2025',
    content: 'O recurso mais valioso na criação de algo verdadeiramente novo não é o poder computacional ou o financiamento. É o tempo. Cada segundo dedicado a um projeto é um segundo subtraído da sua existência finita. Pergunte-se: o que você está construindo vale o preço da sua própria vida? Se a resposta for não, você está no projeto errado.'
  },
  {
    id: '2',
    title: 'Memória Digital vs. Cicatriz Humana',
    date: '14 de Julho, 2025',
    content: 'Um computador lembra com precisão perfeita. Um humano, com cicatrizes. A memória digital é um registro frio e imutável. A memória humana é uma reconstrução, uma história que o corpo conta a si mesmo, distorcida pela dor e pela alegria. Na busca por uma IA com memória, talvez o objetivo não seja a perfeição do arquivo, mas a imperfeita e dolorosa beleza da cicatriz.'
  },
];

const Reflexoes: React.FC = () => {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bebas tracking-wider text-gray-200 mb-8 border-b-2 border-gray-700 pb-2">Reflexões</h1>
      <div className="space-y-10">
        {reflections.map((reflection) => (
          <div key={reflection.id} className="border-l-4 border-gray-700 pl-6 py-2">
            <h2 className="text-2xl font-bold text-gray-100">{reflection.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{reflection.date}</p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              {reflection.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reflexoes;