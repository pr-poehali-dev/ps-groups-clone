import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PS Groups</h3>
            <p className="text-white/80">Профессиональное строительство с 2008 года</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Главная</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">О компании</Link>
              <Link to="/services" className="text-white/80 hover:text-white transition-colors">Услуги</Link>
              <Link to="/projects" className="text-white/80 hover:text-white transition-colors">Проекты</Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Контакты</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="text-white/80 space-y-2">
              <p>+7 (495) 123-45-67</p>
              <p>info@psgroups.ru</p>
              <p>г. Москва, ул. Строителей, 15</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2024 PS Groups. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
