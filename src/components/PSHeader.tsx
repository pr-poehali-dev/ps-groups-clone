import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function PSHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О компании', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Проекты', href: '/projects' },
    { name: 'Контакты', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={28} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">Проект-Сервис Групп</div>
              <div className="text-xs text-muted-foreground">Москва и Московская область</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Звоните сейчас:</div>
              <a href="tel:+74951234567" className="text-lg font-bold text-primary hover:text-primary/80">
                +7 (495) 123-45-67
              </a>
            </div>
            <Button size="lg">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 px-4 pt-4 border-t border-border">
              <a href="tel:+74951234567" className="text-lg font-bold text-primary block mb-3">
                +7 (495) 123-45-67
              </a>
              <Button size="lg" className="w-full">
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
