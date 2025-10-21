import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import PSHeader from '@/components/PSHeader';
import PSFooter from '@/components/PSFooter';

export default function Services() {
  const services = [
    { 
      icon: 'Home', 
      title: 'Жилое строительство', 
      desc: 'Проектирование и строительство жилых комплексов',
      features: [
        'Многоквартирные жилые дома',
        'Индивидуальные коттеджи',
        'Таунхаусы и дуплексы',
        'Благоустройство территории'
      ]
    },
    { 
      icon: 'Building', 
      title: 'Коммерческие объекты', 
      desc: 'Торговые центры, офисы, бизнес-центры',
      features: [
        'Офисные центры',
        'Торговые комплексы',
        'Рестораны и кафе',
        'Гостиницы'
      ]
    },
    { 
      icon: 'HardHat', 
      title: 'Промышленное строительство', 
      desc: 'Складские и производственные помещения',
      features: [
        'Производственные цеха',
        'Складские комплексы',
        'Логистические центры',
        'Ангары и терминалы'
      ]
    },
    { 
      icon: 'Wrench', 
      title: 'Реконструкция', 
      desc: 'Модернизация и реконструкция зданий',
      features: [
        'Капитальный ремонт',
        'Перепланировка помещений',
        'Усиление конструкций',
        'Фасадные работы'
      ]
    },
    { 
      icon: 'PenTool', 
      title: 'Проектирование', 
      desc: 'Полный цикл проектных работ',
      features: [
        'Архитектурное проектирование',
        'Конструктивные решения',
        'Инженерные системы',
        'Дизайн интерьеров'
      ]
    },
    { 
      icon: 'Shield', 
      title: 'Гарантия качества', 
      desc: 'Гарантийное обслуживание объектов',
      features: [
        'Контроль качества работ',
        'Гарантийное обслуживание',
        'Техническая поддержка',
        'Устранение недостатков'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PSHeader />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-white/90">Полный спектр строительных услуг от проектирования до сдачи объекта</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Этапы работы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: '01', title: 'Консультация', desc: 'Обсуждение проекта и ваших требований' },
                { num: '02', title: 'Проектирование', desc: 'Разработка проектной документации' },
                { num: '03', title: 'Согласование', desc: 'Утверждение проекта и сметы' },
                { num: '04', title: 'Строительство', desc: 'Реализация проекта с контролем качества' },
                { num: '05', title: 'Сдача объекта', desc: 'Приемка работ и передача документации' },
                { num: '06', title: 'Гарантия', desc: 'Гарантийное обслуживание объекта' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-4xl font-bold text-primary/20">{step.num}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PSFooter />
    </div>
  );
}