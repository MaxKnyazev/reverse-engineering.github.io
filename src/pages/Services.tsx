import { Printer, ScanLine, Cog, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ServicesProps {
  onRequestClick: (productName?: string) => void;
}

export function Services({ onRequestClick }: ServicesProps) {
  const services = [
    {
      icon: <Printer className="w-12 h-12" />,
      title: '3D-печать',
      description: 'Профессиональное изготовление деталей и прототипов',
      image: 'https://images.unsplash.com/photo-1703221561813-cdaa308cf9e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODk4MDk4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'FDM, SLA, SLS технологии',
        'Материалы: PLA, ABS, PETG, Nylon, Resin',
        'Точность до 0.1 мм',
        'Срок изготовления от 24 часов',
        'Постобработка: шлифовка, покраска',
      ],
    },
    {
      icon: <ScanLine className="w-12 h-12" />,
      title: '3D-сканирование',
      description: 'Высокоточное сканирование объектов любой сложности',
      image: 'https://images.unsplash.com/photo-1694898828036-cf4d95e80e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwM2QlMjBzY2FubmVyfGVufDF8fHx8MTc2OTA4NzE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Реверс-инжиниринг',
        'Контроль качества продукции',
        'Сканирование крупногабаритных объектов',
        'Создание CAD-моделей',
        'Экспорт в различные форматы',
      ],
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: 'Производство деталей',
      description: 'Серийное изготовление функциональных изделий',
      image: 'https://images.unsplash.com/photo-1758873263563-5ba4aa330799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2OTA4NzE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Малые и средние серии',
        'Промышленная прочность',
        'Инженерное сопровождение',
        'Контроль качества',
        'Специальные цены на большие партии',
      ],
    },
  ];

  const technologies = [
    {
      name: 'FDM (Fused Deposition Modeling)',
      description: 'Послойное наплавление термопластика',
      advantages: ['Низкая стоимость', 'Большой выбор материалов', 'Крупные детали'],
    },
    {
      name: 'SLA (Stereolithography)',
      description: 'Фотополимеризация жидкой смолы',
      advantages: ['Высокая детализация', 'Гладкая поверхность', 'Точность'],
    },
    {
      name: 'SLS (Selective Laser Sintering)',
      description: 'Селективное лазерное спекание порошка',
      advantages: ['Прочные детали', 'Без поддержек', 'Функциональные прототипы'],
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA]">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[#212121] mb-4">Наши услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный цикл работ от 3D-моделирования до производства готовых изделий
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-[#D32F2F] bg-opacity-10 rounded-xl flex items-center justify-center text-[#D32F2F] mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-[#212121] mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onRequestClick(service.title)}
                    className="px-6 py-3 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-lg"
                  >
                    Заказать услугу
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">Технологии 3D-печати</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-200">
                <h3 className="text-[#212121] mb-3">{tech.name}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>

                <div className="space-y-2">
                  <div className="text-sm text-[#D32F2F] font-semibold mb-2">Преимущества:</div>
                  {tech.advantages.map((advantage, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full"></div>
                      <span className="text-sm text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] rounded-2xl p-12 text-center text-white">
            <h2 className="mb-4">Нужна консультация?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Наши инженеры помогут подобрать оптимальную технологию и материалы для вашего проекта
            </p>
            <button
              onClick={() => onRequestClick()}
              className="px-8 py-4 bg-white text-[#D32F2F] rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
