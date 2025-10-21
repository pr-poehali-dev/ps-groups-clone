import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Строим будущее вместе</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">Профессиональное строительство жилых и коммерческих объектов под ключ</p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h2>
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр строительных услуг от проектирования до сдачи объекта
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Home', title: 'Жилое строительство', desc: 'Проектирование и строительство жилых комплексов' },
              { icon: 'Building', title: 'Коммерческие объекты', desc: 'Торговые центры, офисы, бизнес-центры' },
              { icon: 'HardHat', title: 'Промышленное строительство', desc: 'Складские и производственные помещения' }
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
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg">Все услуги</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Реализованные проекты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Примеры наших работ в жилом и коммерческом строительстве
          </p>
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
          <div className="text-center mt-8">
            <Link to="/projects">
              <Button variant="outline" size="lg">Все проекты</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
