import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const stats = [
    { value: '7+', label: 'лет на рынке' },
    { value: '500+', label: 'выполненных проектов' },
    { value: '200+', label: 'довольных клиентов' },
    { value: '50+', label: 'единиц оборудования' },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Качество',
      description: 'Используем только проверенное оборудование и сертифицированные материалы',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому проекту и персональное сопровождение',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: 'Инновации',
      description: 'Постоянно внедряем новые технологии и совершенствуем процессы',
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: 'Профессионализм',
      description: 'Команда опытных инженеров и технических специалистов',
    },
  ];

  const portfolio = [
    {
      title: 'Автомобильная промышленность',
      description: 'Прототипирование деталей интерьера',
      image: 'https://3dtoday.ru/upload/posts/main/GAJpKTsbT5d1Cbirlc0ZGyzHry1Iz4juHvkoRBYiMcOfDEiQSV.jpg',
    },
    {
      title: 'Медицина',
      description: 'Анатомические модели для обучения',
      image: 'https://cdn.thewirecutter.com/wp-content/media/2024/08/BEST-3D-PRINTERS-2048px-5132.jpg?auto=webp&quality=75&crop=1.91:1&width=1200',
    },
    {
      title: 'Архитектура',
      description: 'Макеты зданий и сооружений',
      image: 'https://mplast.by/wp-content/uploads/2018/01/3dp-model-serdca-cheloveka-02.jpg',
    },
    {
      title: 'Промышленное производство',
      description: 'Функциональные детали для станков',
      image: 'https://cdn.thewirecutter.com/wp-content/media/2024/08/BEST-3D-PRINTERS-2048px-5132.jpg?auto=webp&quality=75&crop=1.91:1&width=1200',
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA]">
      {/* Hero */}
      <section id="hero" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[#212121] mb-4 text-7xl font-bold">О компании</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда профессионалов, которая уже более 7 лет помогает бизнесу внедрять передовые
            3D-технологии в производство
          </p>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="text-4xl text-[#D32F2F] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#212121] mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Компания REVERSE-ENGINEERING была основана в 2019 году группой инженеров,
                  увлеченных идеей внедрения аддитивных технологий в российскую промышленность.
                </p>
                <p>
                  Начав с небольшой мастерской и двух настольных принтеров, мы постепенно расширили
                  производство, инвестируя в современное оборудование и обучение специалистов.
                </p>
                <p>
                  Сегодня мы располагаем парком из более чем 50 единиц профессионального
                  оборудования и обслуживаем клиентов из различных отраслей: от автомобилестроения
                  до медицины.
                </p>
                <p>
                  Наша миссия — сделать 3D-технологии доступными для каждого предприятия,
                  независимо от его масштаба.
                </p>
              </div>
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://avatars.mds.yandex.net/i?id=d6594748670edc885ce15c8f43b70f42-5410808-images-thumbs&n=13"
                alt="Наш офис"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">Наши ценности</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                  {value.icon}
                  </div>
                </div>
                <h3 className="text-[#212121] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">Портфолио проектов</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[#212121] mb-2 group-hover:text-[#D32F2F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}