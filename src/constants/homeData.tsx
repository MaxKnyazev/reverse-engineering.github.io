/**
 * Данные для главной страницы
 */

import React from 'react';

export interface HeroSlide {
  title: string;
  description: string;
  image: string;
  page: string;
  buttonText: string;
}

export interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

export const heroSlides: HeroSlide[] = [
  {
    title: '3D-печать и оборудование для вашего производства',
    description:
      'Изготовление деталей, прототипов и индивидуальных моделей. Продажа промышленных 3D-принтеров, сканеров и расходных материалов.',
    image:
      'https://images.unsplash.com/photo-1736666835308-27fa97a0d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50aW5nJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzAzNjA2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    page: 'home',
    buttonText: 'Главная',
  },
  {
    title: 'Широкий выбор оборудования и материалов',
    description:
      'Промышленные 3D-принтеры, сканеры, филаменты и расходные материалы. Гарантия качества и профессиональная поддержка.',
    image:
      'https://images.unsplash.com/photo-1660145010706-f6e1e54758de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2F0YWxvZyUyMHByb2R1Y3RzJTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzcwMzYwNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    page: 'catalog',
    buttonText: 'Каталог товаров',
  },
  {
    title: 'Профессиональные услуги 3D-печати',
    description:
      'Быстрое прототипирование, серийное производство деталей, 3D-сканирование и реверс-инжиниринг. Высокая точность и короткие сроки.',
    image:
      'https://images.unsplash.com/photo-1769779395658-8bca02f9564e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc3MDM2MDY0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    page: 'services',
    buttonText: 'Наши услуги',
  },
  {
    title: 'О компании REVERSE-ENGINEERING',
    description:
      'Опытная команда инженеров, современное оборудование и индивидуальный подход к каждому проекту. Доверьте нам ваши задачи.',
    image:
      'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzAyODE2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    page: 'about',
    buttonText: 'О компании',
  },
  {
    title: 'Блог о 3D-технологиях',
    description:
      'Последние новости индустрии, обзоры оборудования, кейсы наших проектов и полезные советы по работе с 3D-печатью.',
    image:
      'https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYmxvZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzcwMjg1NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    page: 'blog',
    buttonText: 'Читать блог',
  },
  {
    title: 'Часто задаваемые вопросы',
    description:
      'Ответы на популярные вопросы о 3D-печати, оборудовании, материалах и услугах. Найдите полезную информацию или задайте свой вопрос.',
    image:
      'https://images.unsplash.com/photo-1652077859695-de2851a95620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwJTIwc3VwcG9ydCUyMHF1ZXN0aW9ucyUyMGFuc3dlcnN8ZW58MXx8fHwxNzcwMzYwNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    page: 'faq',
    buttonText: 'FAQ',
  },
  {
    title: 'Свяжитесь с нами',
    description:
      'Оставьте заявку, позвоните или приезжайте в наш офис. Мы ответим на все вопросы и поможем реализовать ваш проект.',
    image:
      'https://images.unsplash.com/photo-1758519288954-4e4f55e4701e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnRhY3QlMjBjb21tdW5pY2F0aW9ufGVufDF8fHx8MTc3MDM2MDY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    page: 'contact',
    buttonText: 'Контакты',
  },
];

export const advantages: Advantage[] = [
  {
    icon: (
      <svg fill="#FFF" width="60%" version="1.1" id="XMLID_145_" viewBox="0 0 24 24">
        <g id="trigger">
          <g>
            <path d="M8.9,24H5.3l3-9H2.2L8,0h11.3l-4,8h6.5L8.9,24z M5.2,13h5.9l-2.9,8.8L17.6,10h-5.5l4-8H9.4L5.2,13z" />
          </g>
        </g>
      </svg>
    ),
    title: 'Высокая скорость',
    description: 'Изготовление прототипов и деталей за 24-48 часов',
  },
  {
    icon: (
      <svg fill="#FFF" version="1.1" id="XMLID_259_" viewBox="0 0 24 24" width="60%">
        <g id="configuration">
          <g>
            <path
              d="M4,24c-1.1,0-2.1-0.4-2.8-1.2C0.5,22.1,0,21,0,20s0.4-2.1,1.2-2.8l8-8C9.1,8.7,9,8.1,9,7.5C9,3.4,12.4,0,16.5,0
          		c0.9,0,1.8,0.2,2.6,0.5L20.6,1L16,5.6L18.4,8L23,3.4l0.6,1.4C23.8,5.7,24,6.6,24,7.5c0,4.1-3.4,7.5-7.5,7.5
          		c-0.6,0-1.1-0.1-1.7-0.2l-8,8C6.1,23.6,5.1,24,4,24z M16.5,2c-3,0-5.5,2.5-5.5,5.5c0,0.6,0.1,1.1,0.3,1.7l0.2,0.6l-8.9,8.9
          			C2.2,19,2,19.5,2,20s0.2,1,0.6,1.4c0.7,0.8,2.1,0.8,2.8,0l8.9-8.9l0.6,0.2c0.5,0.2,1.1,0.3,1.7,0.3c3,0,5.5-2.5,5.5-5.5
          		c0-0.1,0-0.2,0-0.3l-3.6,3.6l-5.2-5.2L16.9,2C16.7,2,16.6,2,16.5,2z"
            />
          </g>
        </g>
      </svg>
    ),
    title: 'Точность печати',
    description: 'Погрешность не более 0.1 мм на профессиональном оборудовании',
  },
  {
    icon: (
      <svg fill="#FFF" width="60%" version="1.1" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
        <g id="user-expert">
          <path
            d="M2,19c0-3.9,3.1-7,7-7c2.5,0,4.8,1.3,6.1,3.5l1.7-1c-1-1.7-2.5-3-4.2-3.7C14.1,9.7,15,7.9,15,6c0-3.3-2.7-6-6-6S3,2.7,3,6
      	c0,1.9,0.9,3.7,2.4,4.8C2.2,12.2,0,15.3,0,19v5h12v-2H2V19z M5,6c0-2.2,1.8-4,4-4s4,1.8,4,4s-1.8,4-4,4S5,8.2,5,6z"
          />
          <path d="M24.1,15.8l-7.6,7.6l-4.7-4.7l1.4-1.4l3.3,3.3l6.2-6.2L24.1,15.8z" />
        </g>
      </svg>
    ),
    title: 'Индивидуальный подход',
    description: 'Консультация инженера и подбор оптимальной технологии',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Алексей Петров',
    company: 'ООО "ТехноМаш"',
    text: 'Отличное качество печати и быстрые сроки. Заказываем прототипы для производства уже год.',
    rating: 5,
  },
  {
    name: 'Мария Иванова',
    company: 'Дизайн-студия "Креатив"',
    text: 'Профессиональная команда, помогли подобрать оптимальный принтер и материалы.',
    rating: 5,
  },
  {
    name: 'Дмитрий Сидоров',
    company: 'НИИ "Авиатех"',
    text: 'Высокоточное оборудование и компетентные специалисты. Рекомендуем!',
    rating: 5,
  },
];

