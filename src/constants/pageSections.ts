/**
 * Разделы страниц для навигации в выпадающих меню
 */

export interface PageSection {
  id: string;
  label: string;
}

export const pageSections: Record<string, PageSection[]> = {
  home: [
    { id: 'advantages', label: 'Наши преимущества' },
    { id: 'products', label: 'Популярные товары' },
    { id: 'testimonials', label: 'Отзывы клиентов' },
    { id: 'cta', label: 'Оставить заявку' },
  ],
  catalog: [
    { id: 'category:all', label: 'Все товары' },
    { id: 'category:printers', label: '3D-принтеры' },
    { id: 'category:scanners', label: '3D-сканеры' },
    { id: 'category:3d-products', label: '3D-изделия' },
    { id: 'category:materials', label: 'Расходники' },
    { id: 'category:tools', label: 'Инструменты' },
  ],
  services: [
    { id: 'services', label: 'Наши услуги' },
    { id: 'technologies', label: 'Технологии 3D-печати' },
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
    { id: 'form-map', label: 'Форма обратной связи и карта' },
  ],
};

