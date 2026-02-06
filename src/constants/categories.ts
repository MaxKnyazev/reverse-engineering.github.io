/**
 * Категории товаров
 */
export const categories = [
  { id: 'all', label: 'Все товары' },
  { id: '3d-products', label: '3D-изделия' },
  { id: 'printers', label: '3D-принтеры' },
  { id: 'scanners', label: '3D-сканеры' },
  { id: 'materials', label: 'Расходники' },
  { id: 'tools', label: 'Инструменты' },
] as const;

export type CategoryId = typeof categories[number]['id'];

