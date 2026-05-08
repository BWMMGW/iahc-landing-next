import { useState } from 'react';
import Link from 'next/link';

type NavLink = {
  href: string;
  name: string;
};

// Add your navigation items here when needed
const navLinks: NavLink[] = [];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="headerContainer">
        <div className="logoContainer">
          <div className="logoIcon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="4" fill="#000000" />
              <path
                fill="none"
                stroke="white"
                strokeWidth="1.2"
                d="M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z
                   M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"
              />
            </svg>
          </div>
          <div className="brandText">
            <span className="brandName">iahc Network</span>
          </div>
        </div>

        <nav className={`navigation ${isMenuOpen ? 'navigationOpen' : ''}`}>
          <ul className="navLinks">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="navLink">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`headerActions ${isMenuOpen ? 'headerActionsOpen' : ''}`}>
          <a href="https://dash.iahc.ir" className="btnGetStarted">
            Sign In
          </a>
        </div>

        <button className="mobileMenuButton" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;