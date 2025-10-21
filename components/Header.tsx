import React from 'react';

const links = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#projetos', label: 'Labs' },
  { href: '#forja', label: 'Forja' },
  { href: '#reflexoes', label: 'Reflexões' },
  { href: '#contato', label: 'Contato' },
];

const Header: React.FC = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-gray-900/70 bg-black/70">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <a
            href="#"
            onClick={handleLogoClick}
            className="text-3xl font-display tracking-[0.4rem] uppercase text-white transition-colors hover:text-ember"
            aria-label="Voltar ao topo"
          >
            IGOR
          </a>
          <span className="hidden text-xs uppercase tracking-[0.5rem] text-gray-500 md:block">
            BUILDS FUTURES
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-mono uppercase tracking-widest text-gray-400 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-ember to-aurora transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="https://x.com/igorbiccas"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-gray-800 px-5 py-2 text-xs font-mono uppercase tracking-[0.3rem] text-gray-300 transition hover:border-ember/60 hover:text-white"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 group-hover:bg-ember transition" />
          Ao vivo no X
        </a>
      </div>
    </header>
  );
};

export default Header;
