import React from 'react';

const links = [
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#legado', label: 'Legado' },
  { href: '#insights', label: 'Insights' },
  { href: '#conexao', label: 'Conexão' },
];

const Header: React.FC = () => {
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          onClick={handleLogoClick}
          className="text-xs uppercase tracking-[0.5em] text-slate-100 transition hover:text-white"
          aria-label="Voltar ao topo"
        >
          Igor Biccas
        </a>

        <nav className="hidden gap-6 text-[0.65rem] uppercase tracking-[0.45em] text-slate-500 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-200">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:sinais@igorbiccas.com"
          className="rounded-full border border-white/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.45em] text-slate-200 transition hover:border-white/30 hover:text-white"
        >
          Sinalize
        </a>
      </div>
    </header>
  );
};

export default Header;
