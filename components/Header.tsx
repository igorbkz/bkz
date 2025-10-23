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
    <header className="site-header">
      <div className="site-header__blur" aria-hidden />
      <div className="site-header__container">
        <a
          href="#"
          onClick={handleLogoClick}
          className="site-header__brand"
          aria-label="Voltar ao topo"
        >
          Igor Biccas
        </a>

        <nav className="site-header__nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="mailto:sinais@igorbiccas.com" className="site-header__cta">
          <span>Sinalize</span>
          <span aria-hidden className="site-header__cta-glow" />
        </a>
      </div>
    </header>
  );
};

export default Header;
