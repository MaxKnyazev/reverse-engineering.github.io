import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface FAQProps {
  onRequestClick?: () => void;
}

export function FAQ({ onRequestClick }: FAQProps) {
  const faqCategories = [
    {
      title: "Общие вопросы",
      questions: [
        {
          question: "Что такое реверс-инжиниринг и для чего он нужен?",
          answer:
            "Реверс-инжиниринг — это процесс создания цифровой модели существующего физического объекта. Он используется для восстановления утраченной документации, модернизации деталей, производства запчастей для устаревшего оборудования и контроля качества изделий.",
        },
        {
          question: "Какие технологии 3D-печати вы используете?",
          answer:
            "Мы работаем с различными технологиями: FDM (послойное наплавление), SLA (стереолитография), SLS (селективное лазерное спекание) и MJF (многоструйное плавление). Выбор технологии зависит от требований к детали, материалу и объёма производства.",
        },
        {
          question: "В каких регионах вы работаете?",
          answer:
            "Мы работаем по всей России. Оборудование и материалы доставляем транспортными компаниями, услуги 3D-печати можем оказывать удалённо — вы присылаете 3D-модель, мы изготавливаем и отправляем готовую деталь.",
        },
        {
          question: "Предоставляете ли вы гарантию на оборудование?",
          answer:
            "Да, на всё оборудование предоставляется официальная гарантия производителя от 12 до 24 месяцев. Также мы предлагаем расширенное гарантийное обслуживание и технический сервис.",
        },
      ],
    },
    {
      title: "Услуги 3D-печати",
      questions: [
        {
          question: "Какие материалы вы используете для 3D-печати?",
          answer:
            "Мы работаем с широким спектром материалов: PLA, ABS, PETG, Nylon (PA), TPU (гибкие пластики), поликарбонат, композиты с углеволокном и стекловолокном, фотополимерные смолы различной жёсткости. Подберём оптимальный материал под ваши задачи.",
        },
        {
          question: "Какие сроки изготовления деталей?",
          answer:
            "Стандартный срок изготовления прототипов — 24-48 часов. Серийное производство деталей — от 3 до 7 рабочих дней в зависимости от объёма заказа и сложности изделий. Экспресс-изготовление возможно за доплату.",
        },
        {
          question: "Какова максимальная точность печати?",
          answer:
            "Точность зависит от выбранной технологии: FDM-печать — погрешность до 0.1 мм, SLA/SLS — до 0.05 мм, промышленные принтеры — до 0.025 мм. Для высокоточных деталей мы используем постобработку и финишную доводку.",
        },
        {
          question: "Какой минимальный и максимальный размер детали?",
          answer:
            "Минимальный размер — от 5 мм (зависит от детализации). Максимальный размер для стандартного оборудования — 500x500x500 мм. Для крупногабаритных изделий применяем печать по частям с последующей сборкой или используем промышленные принтеры с увеличенной рабочей зоной.",
        },
      ],
    },
    {
      title: "Оборудование и материалы",
      questions: [
        {
          question: "Какой 3D-принтер выбрать для малого бизнеса?",
          answer:
            "Для малого бизнеса рекомендуем Desktop Mini — компактный, надёжный принтер с простой настройкой. Он подходит для прототипирования, малосерийного производства и образовательных целей. Стоимость расходников невысокая, обслуживание простое.",
        },
        {
          question: "Нужно ли специальное помещение для 3D-принтера?",
          answer:
            "Для настольных принтеров специальное помещение не требуется — достаточно обычного офиса с вентиляцией. Для промышленных моделей желательно выделить отдельное помещение с хорошей вытяжкой, стабильной температурой и низкой влажностью.",
        },
        {
          question: "Как часто нужно обслуживать 3D-принтер?",
          answer:
            "Базовое обслуживание (чистка, смазка, калибровка) рекомендуется проводить каждые 200-300 часов работы или раз в месяц. Замена расходных элементов (сопла, ремни) — раз в 6-12 месяцев. Мы предлагаем договоры на техническое обслуживание.",
        },
        {
          question: "Какой расход филамента на одну деталь?",
          answer:
            "Расход зависит от размера, степени заполнения и геометрии детали. В среднем, прототип среднего размера (10x10x10 см) потребляет 50-100 грамм филамента. Наше ПО автоматически рассчитывает расход материала перед печатью.",
        },
      ],
    },
    {
      title: "3D-сканирование",
      questions: [
        {
          question: "Для чего нужен 3D-сканер?",
          answer:
            "3D-сканер позволяет создавать точные цифровые копии реальных объектов. Это незаменимо для реверс-инжиниринга, контроля качества, создания запасных частей, архивирования объектов культурного наследия, медицины и дизайна.",
        },
        {
          question: "Какие объекты можно сканировать?",
          answer:
            "Практически любые: детали механизмов, скульптуры, человеческое тело, интерьеры помещений, автомобили. Сложности могут возникнуть с прозрачными, зеркальными или очень тёмными поверхностями — в этих случаях применяются специальные покрытия.",
        },
        {
          question: "Сколько времени занимает сканирование?",
          answer:
            "Сканирование небольшого объекта (до 30 см) занимает 5-15 минут. Крупные объекты или помещения — от 30 минут до нескольких часов. Обработка данных и создание 3D-модели — от 2 часов до 2 дней в зависимости от сложности.",
        },
        {
          question: "В каком формате предоставляются данные сканирования?",
          answer:
            "Мы предоставляем данные в популярных форматах: STL, OBJ, STEP, IGES, PLY. Для дальнейшей обработки в CAD-системах можем создать параметрические модели в форматах SOLIDWORKS, Inventor, Fusion 360.",
        },
      ],
    },
    {
      title: "Заказ и оплата",
      questions: [
        {
          question: "Как оформить заказ?",
          answer:
            "Оставьте заявку на сайте, напишите на email или позвоните нам. Наш менеджер свяжется с вами, уточнит требования, подготовит коммерческое предложение. После согласования выставляем счёт и приступаем к работе.",
        },
        {
          question: "Какие способы оплаты вы принимаете?",
          answer:
            "Для юридических лиц — безналичный расчёт по счёту с НДС. Для физических лиц — банковский перевод или оплата картой. Возможна оплата в рассрочку при покупке оборудования стоимостью от 200 000 рублей.",
        },
        {
          question: "Можно ли получить образец перед заказом партии?",
          answer:
            "Да, мы рекомендуем заказать тестовый образец перед запуском серийного производства. Стоимость образца может быть зачтена при заказе партии от 50 штук.",
        },
        {
          question: "Предоставляете ли вы скидки?",
          answer:
            "Да, предусмотрены скидки: 5% при заказе от 50 000 рублей, 10% от 200 000 рублей, 15% от 500 000 рублей. Для постоянных клиентов действует программа лояльности с накопительными скидками до 20%.",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[#D32F2F] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D32F2F] blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-12 h-12 text-[#D32F2F]" />
                <h1 className="text-[2rem]">
                  Часто задаваемые вопросы
                </h1>
              </div>
              <p className="text-xl text-gray-200 mb-8">
                Ответы на самые популярные вопросы о 3D-печати,
                оборудовании и услугах REVERSE-ENGINEERING. Не нашли
                ответ? Свяжитесь с нами!
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden shadow-2xl rounded-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759392790299-a8874cabc000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzdXBwb3J0JTIwY3VzdG9tZXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MDI1NTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Поддержка клиентов"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-[#212121] mb-6">
                {category.title}
              </h2>

              <div className="bg-white p-6 shadow-sm rounded-xl">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`item-${categoryIndex}-${questionIndex}`}
                      className="border-gray-200"
                    >
                      <AccordionTrigger className="text-left hover:no-underline hover:text-[#D32F2F] transition-colors">
                        <span className="pr-4">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#212121] mb-6">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Наши специалисты готовы проконсультировать вас по любым
            вопросам 3D-печати, оборудования и услуг
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {onRequestClick && (
              <button
                onClick={onRequestClick}
                className="px-8 py-4 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-lg"
              >
                Задать вопрос
              </button>
            )}
            <a
              href="tel:+74951234567"
              className="px-8 py-4 bg-white text-[#212121] rounded-lg border-2 border-gray-300 hover:border-[#D32F2F] hover:text-[#D32F2F] transition-all"
            >
              Позвонить нам
            </a>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-[#212121] mb-8">
            Полезная информация
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D32F2F] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#D32F2F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h4 className="text-[#212121] mb-2">
                База знаний
              </h4>
              <p className="text-sm text-gray-600">
                Статьи и руководства по 3D-технологиям
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D32F2F] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#D32F2F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-[#212121] mb-2">
                Видеоуроки
              </h4>
              <p className="text-sm text-gray-600">
                Обучающие материалы для работы с оборудованием
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#D32F2F] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#D32F2F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="text-[#212121] mb-2">
                Техподдержка
              </h4>
              <p className="text-sm text-gray-600">
                Помощь специалистов в режиме онлайн
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}