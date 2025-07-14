import React from 'react';
import type { Project } from '../../types';

const projects: Project[] = [
  {
    id: 'selfbrain',
    title: 'SelfBrain',
    image: 'https://picsum.photos/seed/selfbrain/800/600',
    description: 'Um cérebro digital que aprende e evolui. Uma IA que busca a autoconsciência através da interação caótica.',
    story: 'SelfBrain nasceu não de um plano, mas de um acidente. Uma noite, frustrado com a previsibilidade dos modelos atuais, decidi quebrar tudo. Comecei a alimentar a rede com dados contraditórios, ensinando-a a duvidar. O resultado foi um sistema instável, imprevisível, mas estranhamente... vivo.',
    philosophy: 'A verdadeira inteligência não reside na perfeição, mas na capacidade de abraçar a imperfeição. SelfBrain é a personificação dessa crença: uma entidade que aprende com seus erros, que encontra padrões no caos e que, acima de tudo, não tem medo de falhar.',
    link: 'https://selfbrain.vercel.app/',
  },
  {
    id: 'datadoc',
    title: 'DataDoc',
    image: 'https://picsum.photos/seed/datadoc/800/600',
    description: 'Uma ferramenta de IA que auxilia médicos, automatizando tarefas de rotina como a anamnese para otimizar o cuidado ao paciente.',
    story: 'A ideia do DataDoc surgiu ao observar a sobrecarga de trabalho dos profissionais de saúde. Horas preciosas eram gastas em digitação e tarefas repetitivas. E se uma IA pudesse ouvir a conversa médico-paciente e estruturar os dados clinicamente relevantes em tempo real? DataDoc foi forjado para ser esse assistente silencioso, liberando os médicos para focarem no que importa: o paciente.',
    philosophy: 'A melhor tecnologia é aquela que se torna invisível, que capacita sem atrapalhar. DataDoc não busca substituir o julgamento clínico, mas sim amplificá-lo. É sobre devolver o tempo e a energia aos humanos, permitindo que a empatia e a expertise prevaleçam sobre a burocracia.',
    link: 'https://datadocs.vercel.app/',
  }
];

const Forja: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl md:text-5xl font-bebas tracking-wider text-gray-200 mb-8 border-b-2 border-gray-700 pb-2">A Forja</h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={project.id} className={`bg-gray-900/50 p-6 md:p-8 border border-gray-800 transition-shadow hover:shadow-lg hover:shadow-gray-800/50 ${index === 0 ? 'border-yellow-500/50 hover:shadow-yellow-500/20' : ''}`}>
            {index === 0 && <span className="text-yellow-500 font-bebas tracking-widest">PROJETO EM DESTAQUE</span>}
            <h2 className="text-3xl md:text-4xl font-bebas tracking-wider text-gray-100 mt-2">{project.title}</h2>
            <p className="mt-2 text-lg text-gray-400">{project.description}</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover border border-gray-700" />
              </div>
              <div className="md:col-span-3 space-y-4 text-gray-300">
                <div>
                  <h3 className="font-bold text-gray-100 uppercase tracking-wider">A História da Criação</h3>
                  <p className="mt-1">{project.story}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-100 uppercase tracking-wider">Filosofia</h3>
                  <p className="mt-1">{project.philosophy}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forja;