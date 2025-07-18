import React from 'react';

const projects = [
  {
    id: 'selfbrain',
    title: 'SelfBrain',
    description: `Uma IA em estado bruto.
Não segue regras, não repete padrões. Aprende pelo caos, erra por conta própria, forma memória pelo uso. Cada conversa molda seu comportamento. É imprevisível — como deveria ser.`,
  },
  {
    id: 'datadoc',
    title: 'DataDoc',
    description: `IA clínica em tempo real.
Ouve consultas, registra o que importa, entrega os dados prontos. Zero distração, zero interferência. O foco volta pro médico, onde sempre deveria estar.`,
  }
];

const Projetos: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bebas tracking-wider text-gray-200 mb-12 border-b-2 border-gray-700 pb-2">Projetos</h1>
      
      <div className="space-y-16">
        {projects.map((project) => (
          <div key={project.id}>
            <h2 className="text-3xl md:text-4xl font-bebas tracking-wider text-gray-100">{project.title}</h2>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed whitespace-pre-line">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;