import { Calendar, User, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Как выбрать 3D-принтер для малого бизнеса',
      excerpt:
        'Подробное руководство по выбору оптимального 3D-принтера для старт-апа или малого производства. Сравниваем технологии, материалы и стоимость владения.',
      image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/792c1969-e74d-49bc-8e33-2cdb264aa6aa.__CR0,0,1464,600_PT0_SX1464_V1___.jpg',
      author: 'Алексей Иванов',
      date: '15 января 2026',
      readTime: '8 мин',
      category: 'Оборудование',
    },
    {
      id: 2,
      title: 'Сравнение материалов для 3D-печати: PLA vs ABS vs PETG',
      excerpt:
        'Разбираем особенности популярных филаментов: прочность, термостойкость, область применения. Помогаем определить лучший материал для вашего проекта.',
      image: 'https://3dprinteddecor.com/wp-content/uploads/2024/10/PLA-vs-ABS-vs-PETG-1.jpg',
      author: 'Мария Петрова',
      date: '10 января 2026',
      readTime: '6 мин',
      category: 'Материалы',
    },
    {
      id: 3,
      title: 'Реверс-инжиниринг: от физического объекта к CAD-модели',
      excerpt:
        'Пошаговый процесс 3D-сканирования и создания точной цифровой модели существующего изделия. Кейсы применения в производстве.',
      image: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/b3f/fe0/20d/b3ffe020d336117f4cf25c9c30dc14bf.png',
      author: 'Дмитрий Соколов',
      date: '5 января 2026',
      readTime: '10 мин',
      category: 'Технологии',
    },
    {
      id: 4,
      title: 'Постобработка 3D-печатных деталей: лучшие практики',
      excerpt:
        'Методы улучшения качества поверхности, прочности и внешнего вида деталей после печати: шлифовка, покраска, химическая обработка.',
      image: 'https://avatars.mds.yandex.net/i?id=b9775fc38919a3071cc451e76c991769_l-4210399-images-thumbs&n=13',
      author: 'Мария Петрова',
      date: '28 декабря 2025',
      readTime: '7 мин',
      category: 'Производство',
    },
    {
      id: 5,
      title: '5 ошибок при внедрении 3D-печати в производство',
      excerpt:
        'Анализируем типичные проблемы при переходе на аддитивные технологии и даем рекомендации по их избежанию. Опыт реальных проектов.',
      image: 'https://cvetmir3d.ru/upload/medialibrary/284/Defekty-3D-pechati-13.jpeg',
      author: 'Алексей Иванов',
      date: '20 декабря 2025',
      readTime: '9 мин',
      category: 'Бизнес',
    },
    {
      id: 6,
      title: 'Будущее 3D-печати: тренды 2026 года',
      excerpt:
        'Новые материалы, технологии и области применения аддитивного производства. Прогнозы экспертов и перспективы развития индустрии.',
      image: 'https://3dgu.ru/wp-content/uploads/2025/02/image-261.jpg',
      author: 'Дмитрий Соколов',
      date: '15 декабря 2025',
      readTime: '11 мин',
      category: 'Аналитика',
    },
  ];

  const categories = ['Все статьи', 'Оборудование', 'Материалы', 'Технологии', 'Производство', 'Бизнес', 'Аналитика'];

  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA]">
      {/* Hero */}
      <section id="hero" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[#212121] mb-4 text-7xl font-bold">Блог</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полезные статьи, новости и гайды о 3D-технологиях и аддитивном производстве
          </p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm transition-all cursor-pointer ${
                  index === 0
                    ? 'bg-[#D32F2F] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
              >
                <div className="aspect-video bg-gray-100 overflow-hidden relative">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#D32F2F] text-white rounded-full text-xs font-semibold">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[#212121] mb-3 hover:text-[#D32F2F] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <button className="text-[#D32F2F] text-sm font-semibold hover:text-[#B71C1C] transition-colors cursor-pointer">
                    Читать далее →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-white text-[#D32F2F] border-2 border-[#D32F2F] rounded-lg hover:bg-[#D32F2F] hover:text-white transition-all cursor-pointer">
              Загрузить ещё
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <h2 className="text-[#212121] mb-4">Подписка на новости</h2>
            <p className="text-gray-600 mb-8">
              Получайте новые статьи и эксклюзивные материалы прямо на почту
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-lg whitespace-nowrap cursor-pointer">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
