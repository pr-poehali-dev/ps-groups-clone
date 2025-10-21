import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Projects() {
  const projects = [
    { 
      img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/df5051de-4035-4343-afd1-3d24d4c58134.jpg', 
      title: 'ЖК "Новый Горизонт"', 
      desc: 'Жилой комплекс премиум-класса на 500 квартир',
      category: 'Жилое строительство',
      year: '2023',
      area: '45 000 м²'
    },
    { 
      img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/df0da422-4f37-4ddb-8134-46dbd4693f19.jpg', 
      title: 'Бизнес-центр "Сити"', 
      desc: 'Современный офисный центр класса А',
      category: 'Коммерческое',
      year: '2022',
      area: '25 000 м²'
    },
    { 
      img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/9b8dfc3a-6b1e-4116-9843-7c4d7a498d14.jpg', 
      title: 'Отель "Гранд"', 
      desc: 'Пятизвездочный отель на 200 номеров',
      category: 'Коммерческое',
      year: '2023',
      area: '18 000 м²'
    },
    { 
      img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/df5051de-4035-4343-afd1-3d24d4c58134.jpg', 
      title: 'ЖК "Riverside"', 
      desc: 'Жилой комплекс с видом на реку',
      category: 'Жилое строительство',
      year: '2021',
      area: '38 000 м²'
    },
    { 
      img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/df0da422-4f37-4ddb-8134-46dbd4693f19.jpg', 
      title: 'Торговый центр "Мега"', 
      desc: 'Современный торговый комплекс',
      category: 'Коммерческое',
      year: '2020',
      area: '32 000 м²'
    },
    { 
      img: 'https://cdn.poehali.dev/projects/8eab4845-a51c-46e4-8691-1ea18f4f89f3/files/9b8dfc3a-6b1e-4116-9843-7c4d7a498d14.jpg', 
      title: 'Логистический центр', 
      desc: 'Складской комплекс с офисной частью',
      category: 'Промышленное',
      year: '2022',
      area: '55 000 м²'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Наши проекты</h1>
            <p className="text-xl text-white/90">Примеры реализованных объектов различного назначения</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">{project.category}</Badge>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.desc}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Год: {project.year}</span>
                    <span>Площадь: {project.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
