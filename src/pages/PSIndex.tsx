import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import PSHeader from '@/components/PSHeader';
import PSFooter from '@/components/PSFooter';
import { Link } from 'react-router-dom';

export default function PSIndex() {
  const services = [
    {
      icon: 'Flame',
      title: 'Газовая служба',
      description: 'Установка, обслуживание и ремонт газового оборудования. Все виды работ с газом.',
      features: ['Установка котлов', 'Замена труб', 'Техобслуживание', 'Аварийный ремонт']
    },
    {
      icon: 'Gauge',
      title: 'Поверка счетчиков',
      description: 'Поверка счетчиков воды, газа и электроэнергии без снятия. Официальные документы.',
      features: ['Поверка воды', 'Поверка газа', 'Поверка электричества', 'Документы в день']
    },
    {
      icon: 'PenTool',
      title: 'Перепланировки',
      description: 'Разработка проектов перепланировок и их согласование во всех инстанциях.',
      features: ['Проектирование', 'Согласование', 'Техплан', 'Полное сопровождение']
    },
    {
      icon: 'Shield',
      title: 'Системы безопасности',
      description: 'Установка систем сигнализации, видеонаблюдения и контроля доступа.',
      features: ['Сигнализация', 'Видеонаблюдение', 'Контроль доступа', 'Мониторинг']
    },
    {
      icon: 'Radio',
      title: 'Домофон',
      description: 'Установка и обслуживание домофонных систем любой сложности.',
      features: ['Установка', 'Настройка', 'Ремонт', 'Обслуживание']
    },
    {
      icon: 'Wrench',
      title: 'Бытовые услуги',
      description: 'Широкий спектр бытовых услуг для вашего комфорта и безопасности.',
      features: ['Сантехника', 'Электрика', 'Мелкий ремонт', 'Консультации']
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт более 10 лет',
      description: 'Тысячи выполненных проектов и довольных клиентов'
    },
    {
      icon: 'FileCheck',
      title: 'Все допуски и лицензии',
      description: 'Полное соответствие законодательству РФ'
    },
    {
      icon: 'Clock',
      title: 'Кратчайшие сроки',
      description: 'Выполняем работы точно в срок, без задержек'
    },
    {
      icon: 'Wallet',
      title: 'Лучшая цена',
      description: 'Честные цены без скрытых платежей'
    }
  ];

  const stats = [
    { value: '10+', label: 'лет на рынке' },
    { value: '5000+', label: 'выполненных проектов' },
    { value: '100%', label: 'гарантия качества' },
    { value: '24/7', label: 'поддержка клиентов' }
  ];

  return (
    <div className="min-h-screen">
      <PSHeader />

      <section 
        className="pt-32 pb-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/13d6a34e-bec4-4773-b39a-b79c09b43547.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 to-foreground/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Проект-Сервис Групп
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Специализированная компания по обслуживанию газового оборудования, поверке счетчиков и системам безопасности в Москве и Московской области
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для вашего дома и офиса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg">
                Все услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/877082f0-6388-48c0-a3b2-70856fe8a52e.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-foreground/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Почему выбирают нас
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-white/80">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Получите бесплатную консультацию
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для уточнения деталей и расчета стоимости работ.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                    <span>Бесплатный выезд специалиста</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                    <span>Расчет стоимости на месте</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                    <span>Гарантия на все виды работ</span>
                  </li>
                </ul>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6">Заказать звонок</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <input 
                        type="text" 
                        placeholder="Иван Иванов"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Услуга</label>
                      <select className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Выберите услугу</option>
                        <option>Газовая служба</option>
                        <option>Поверка счетчиков</option>
                        <option>Перепланировки</option>
                        <option>Системы безопасности</option>
                        <option>Домофон</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и понятный процесс работы
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Заявка', desc: 'Оставьте заявку на сайте или позвоните нам' },
              { step: '02', title: 'Консультация', desc: 'Специалист свяжется с вами для уточнения деталей' },
              { step: '03', title: 'Выполнение', desc: 'Выезд мастера и выполнение работ точно в срок' },
              { step: '04', title: 'Гарантия', desc: 'Получаете документы и гарантию на работы' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PSFooter />
    </div>
  );
}
