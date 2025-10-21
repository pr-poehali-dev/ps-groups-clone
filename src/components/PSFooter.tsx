import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function PSFooter() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <div className="font-bold text-lg">Проект-Сервис Групп</div>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Специализированная компания по обслуживанию газового оборудования, поверке счетчиков и системам безопасности.
            </p>
            <p className="text-sm text-white/80">
              Опыт работы более 10 лет
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Газовая служба
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Поверка счетчиков
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Перепланировки
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Системы безопасности
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Домофон
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-white transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">г. Москва, ул. Строителей, д. 15, офис 301</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+74951234567" className="text-white/80 hover:text-white transition-colors block">
                    +7 (495) 123-45-67
                  </a>
                  <a href="tel:+74951234568" className="text-white/80 hover:text-white transition-colors block">
                    +7 (495) 123-45-68
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@psgroups.ru" className="text-white/80 hover:text-white transition-colors">
                  info@psgroups.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 Проект-Сервис Групп. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
