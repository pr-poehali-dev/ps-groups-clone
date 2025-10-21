import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О компании' },
    { path: '/services', label: 'Услуги' },
    { path: '/projects', label: 'Проекты' },
    { path: '/contact', label: 'Контакты' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img 
            src="https://cdn.poehali.dev/files/34ff0bcb-c697-4038-a16c-0d097a1cbe08.jpg" 
            alt="PS Groups" 
            className="h-20 w-auto px-5 py-0 my-3.5 mx-4 object-contain rounded-3xl"
          />
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                isActive(link.path) 
                  ? 'text-primary font-semibold' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${
                  isActive(link.path) 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
