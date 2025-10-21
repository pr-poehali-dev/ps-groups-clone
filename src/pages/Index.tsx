import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src="https://cdn.poehali.dev/files/34ff0bcb-c697-4038-a16c-0d097a1cbe08.jpg" 
            alt="PS Groups" 
            className="h-12 w-auto px-5 py-0 my-3.5 mx-4 object-contain rounded-3xl"
          />
          
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Проекты</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-foreground hover:text-primary transition-colors">Проекты</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">Контакты</button>
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Строим будущее вместе</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">Профессиональное строительство жилых и коммерческих объектов под ключ</p>
            <Button onClick={() => scrollToSection('contact')} size="lg" variant="secondary" className="text-lg px-8">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">15+ лет</h3>
                <p className="text-muted-foreground">опыта в строительстве</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building2" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">200+</h3>
                <p className="text-muted-foreground">реализованных проектов</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">500+</h3>
                <p className="text-muted-foreground">довольных клиентов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Home', title: 'Жилое строительство', desc: 'Проектирование и строительство жилых комплексов' },
              { icon: 'Building', title: 'Коммерческие объекты', desc: 'Торговые центры, офисы, бизнес-центры' },
              { icon: 'HardHat', title: 'Промышленное строительство', desc: 'Складские и производственные помещения' },
              { icon: 'Wrench', title: 'Реконструкция', desc: 'Модернизация и реконструкция зданий' },
              { icon: 'PenTool', title: 'Проектирование', desc: 'Полный цикл проектных работ' },
              { icon: 'Shield', title: 'Гарантия качества', desc: 'Гарантийное обслуживание объектов' }
            ].map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши проекты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/df5051de-4035-4343-afd1-3d24d4c58134.jpg', 
                title: 'ЖК "Новый Горизонт"', 
                desc: 'Жилой комплекс премиум-класса' 
              },
              { 
                img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/df0da422-4f37-4ddb-8134-46dbd4693f19.jpg', 
                title: 'Бизнес-центр "Сити"', 
                desc: 'Современный офисный центр' 
              },
              { 
                img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/9b8dfc3a-6b1e-4116-9843-7c4d7a498d14.jpg', 
                title: 'Отель "Гранд"', 
                desc: 'Пятизвездочный отель' 
              }
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Строителей, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@psgroups.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Время работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6">Отправить сообщение</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                <button onClick={() => scrollToSection('home')} className="text-left text-white/80 hover:text-white transition-colors">Главная</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-white/80 hover:text-white transition-colors">О компании</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-white/80 hover:text-white transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-white/80 hover:text-white transition-colors">Проекты</button>
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
    </div>
  );
}