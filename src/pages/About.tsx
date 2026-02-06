import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const stats = [
    { value: '7+', label: 'лет на рынке' },
    { value: '500+', label: 'выполненных проектов' },
    { value: '200+', label: 'довольных клиентов' },
    { value: '50+', label: 'единиц оборудования' },
  ];

  const team = [
    {
      name: 'Алексей Иванов',
      position: 'Генеральный директор',
      image: 'https://images.unsplash.com/photo-1580643375398-5174902ebcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTQ4NTMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Мария Петрова',
      position: 'Главный инженер',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTQ3MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Дмитрий Соколов',
      position: 'Руководитель производства',
      image: 'https://images.unsplash.com/photo-1718179804654-7c3720b78e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTQ3OTgwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Елена Волкова',
      position: 'Менеджер по работе с клиентами',
      image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTQ3MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Качество',
      description: 'Используем только проверенное оборудование и сертифицированные материалы',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому проекту и персональное сопровождение',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Инновации',
      description: 'Постоянно внедряем новые технологии и совершенствуем процессы',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Профессионализм',
      description: 'Команда опытных инженеров и технических специалистов',
    },
  ];

  const certifications = [
    'ISO 9001:2015',
    'Член Ассоциации 3D-технологий',
    'Сертифицированный партнер ведущих производителей',
    'Гарантия качества на все услуги',
  ];

  const portfolio = [
    {
      title: 'Автомобильная промышленность',
      description: 'Прототипирование деталей интерьера',
      image: 'https://images.unsplash.com/photo-1758873263563-5ba4aa330799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2OTA4NzE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Медицина',
      description: 'Анатомические модели для обучения',
      image: 'https://images.unsplash.com/photo-1739515054273-a2956b1e094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBwYXJ0cyUyMHByb3RvdHlwZXxlbnwxfHx8fDE3NjkwODcxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Архитектура',
      description: 'Макеты зданий и сооружений',
      image: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYW51ZmFjdHVyaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTA4NzE0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Промышленное производство',
      description: 'Функциональные детали для станков',
      image: 'https://images.unsplash.com/photo-1703221561813-cdaa308cf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODk4MDk4OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA]">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[#212121] mb-4">О компании</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда профессионалов, которая уже более 7 лет помогает бизнесу внедрять передовые
            3D-технологии в производство
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
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
      <section className="py-16 bg-white">
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
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5MDU5MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Наш офис"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">Наши ценности</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="w-16 h-16 bg-[#D32F2F] bg-opacity-10 rounded-full flex items-center justify-center text-[#D32F2F] mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-[#212121] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">Наша команда</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[#212121] mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">Сертификаты и награды</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border-2 border-[#D32F2F] border-opacity-20 hover:border-opacity-100 transition-all"
              >
                <Award className="w-12 h-12 text-[#D32F2F] mx-auto mb-4" />
                <p className="text-[#212121] font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-white">
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