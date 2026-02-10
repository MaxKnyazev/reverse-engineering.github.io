/**
 * Разделы страниц для навигации в выпадающих меню
 */

export interface PageSection {
  id: string;
  label: string;
}

export const pageSections: Record<string, PageSection[]> = {
  home: [
    { id: 'hero', label: 'Главный слайдер' },
    { id: 'advantages', label: 'Наши преимущества' },
    { id: 'products', label: 'Популярные товары' },
    { id: 'testimonials', label: 'Отзывы клиентов' },
    { id: 'cta', label: 'Оставить заявку' },
  ],
  catalog: [
    { id: 'catalog', label: 'Каталог товаров' },
  ],
  services: [
    { id: 'hero', label: 'О услугах' },
    { id: 'services', label: 'Наши услуги' },
    { id: 'technologies', label: 'Технологии 3D-печати' },
    { id: 'consultation', label: 'Консультация' },
  ],
  about: [
    { id: 'hero', label: 'О компании' },
    { id: 'stats', label: 'Статистика' },
    { id: 'story', label: 'Наша история' },
    { id: 'values', label: 'Наши ценности' },
    { id: 'portfolio', label: 'Портфолио проектов' },
  ],
  blog: [
    { id: 'hero', label: 'Блог' },
    { id: 'categories', label: 'Категории статей' },
    { id: 'articles', label: 'Статьи' },
    { id: 'newsletter', label: 'Подписка на новости' },
  ],
  faq: [
    { id: 'hero', label: 'FAQ' },
    { id: 'faq-sections', label: 'Вопросы и ответы' },
    { id: 'contact-cta', label: 'Задать вопрос' },
  ],
  contact: [
    { id: 'hero', label: 'Контакты' },
    { id: 'contact-info', label: 'Контактная информация' },
    { id: 'form-map', label: 'Форма обратной связи и карта' },
  ],
};

