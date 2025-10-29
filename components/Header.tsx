import React from 'react';

const Header: React.FC = () => {
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-start px-6">
        <a
          href="#"
          onClick={handleLogoClick}
          className="text-xs uppercase tracking-[0.5em] text-slate-100 transition hover:text-white"
          aria-label="Voltar ao topo"
        >
          Igor Biccas
        </a>
      </div>
    </header>
  );
};

export default Header;
