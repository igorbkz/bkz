import React from 'react';

const links = [
  { href: '#manifesto-heading', label: 'Manifesto' },
  { href: '#agora-heading', label: 'Agora' },
  { href: '#contato-heading', label: 'Contato' },
];

const Header: React.FC = () => {
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.6em] text-slate-200 transition hover:text-white"
          aria-label="Voltar ao topo"
        >
          <span className="inline-flex h-2 w-2 animate-pulse-soft rounded-full bg-ember" aria-hidden="true" />
          Igor Biccas
        </a>

        <nav className="hidden items-center gap-8 text-[0.65rem] uppercase tracking-[0.55em] text-slate-500 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-slate-200">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:oi@igorbiccas.com"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-2 text-[0.65rem] uppercase tracking-[0.5em] text-slate-200 transition hover:border-white/40 hover:text-white"
        >
          Enviar sinal
        </a>
      </div>
    </header>
  );
};

export default Header;
