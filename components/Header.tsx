import React from 'react';

const links = [
  { href: '#manifesto', label: 'Início' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#forja', label: 'Processo' },
  { href: '#reflexoes', label: 'Notas' },
  { href: '#contato', label: 'Contato' },
];

const Header: React.FC = () => {
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/75 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:h-20 sm:px-10">
        <a
          href="#"
          onClick={handleLogoClick}
          className="text-base font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-600 sm:text-lg"
          aria-label="Voltar ao topo"
        >
          Igor Biccas
        </a>

        <nav className="hidden gap-5 text-sm text-slate-600 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://x.com/igorbiccas"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900 sm:inline-flex"
        >
          Estou no X ↗
        </a>
      </div>
    </header>
  );
};

export default Header;
