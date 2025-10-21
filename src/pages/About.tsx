import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import PSHeader from '@/components/PSHeader';
import PSFooter from '@/components/PSFooter';

export default function About() {
  return (
    <div className="min-h-screen">
      <PSHeader />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">О компании</h1>
            <p className="text-xl text-white/90">Профессиональное строительство с 2008 года</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Наша история</h2>
            <p className="text-lg text-muted-foreground mb-6">
              PS Groups была основана в 2008 году группой профессиональных строителей и инженеров с общим видением создания качественных и надежных объектов. За более чем 15 лет работы мы выросли из небольшой компании в одного из ведущих игроков строительного рынка.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Мы специализируемся на строительстве жилых комплексов, коммерческих и промышленных объектов. Наша команда состоит из высококвалифицированных специалистов, которые используют передовые технологии и современные материалы для реализации проектов любой сложности.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">15+</h3>
                <p className="text-muted-foreground">лет на рынке</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building2" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">200+</h3>
                <p className="text-muted-foreground">реализованных проектов</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">500+</h3>
                <p className="text-muted-foreground">довольных клиентов</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">150+</h3>
                <p className="text-muted-foreground">сотрудников</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Качество</h3>
                <p className="text-muted-foreground">
                  Мы используем только проверенные материалы и современные технологии строительства
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Соблюдение сроков</h3>
                <p className="text-muted-foreground">
                  Четкое планирование и контроль на каждом этапе гарантируют сдачу объектов вовремя
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Клиентоориентированность</h3>
                <p className="text-muted-foreground">
                  Индивидуальный подход к каждому клиенту и проекту
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <PSFooter />
    </div>
  );
}