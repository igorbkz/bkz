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
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-6">
      <div className="relative w-full max-w-6xl overflow-hidden rounded-full border border-white/10 bg-black/60 px-6 py-4 shadow-[0_18px_60px_rgba(8,7,26,0.6)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_65%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.0)_55%)]" />
        </div>
        <div className="relative flex items-center justify-between gap-4">
          <a
            href="#"
            onClick={handleLogoClick}
            className="font-display text-lg uppercase tracking-[0.4em] text-slate-100 transition hover:text-white"
            aria-label="Voltar ao topo"
          >
            Igor Biccas
          </a>

          <nav className="hidden items-center gap-6 text-[0.65rem] uppercase tracking-[0.45em] text-slate-400 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative transition hover:text-slate-200"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-gradient-to-r from-transparent via-slate-200/70 to-transparent transition duration-300 group-hover:scale-x-100" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <a
            href="mailto:sinais@igorbiccas.com"
            className="group relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-[0.65rem] uppercase tracking-[0.45em] text-slate-100 transition hover:border-white/40 hover:bg-white/[0.1]"
          >
            <span className="absolute inset-0 rounded-full border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
            <span className="relative">Sinalize</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
