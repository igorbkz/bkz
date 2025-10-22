import React from 'react';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#visao', label: 'Visão' },
  { href: '#contato', label: 'Contato' },
];

const Header: React.FC = () => {
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          onClick={handleLogoClick}
          className="text-sm font-medium tracking-[0.35em] text-slate-200 transition hover:text-white"
          aria-label="Voltar ao topo"
        >
          IGOR BICCAS
        </a>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.3em] text-slate-400 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-100">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center rounded-full border border-white/15 px-5 py-2 text-xs tracking-[0.35em] text-slate-100 transition hover:border-white/40"
        >
          Contato
        </a>
      </div>
    </header>
  );
};

export default Header;
