/**
 * Пункты меню навигации
 */
export const menuItems = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'О компании' },
  { id: 'blog', label: 'Блог' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Контакты' },
] as const;

export type PageId = typeof menuItems[number]['id'];

