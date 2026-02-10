/**
 * Данные о товарах
 */
export interface Product {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  image: string;
  category: 'printers' | 'scanners' | '3d-products' | 'materials' | 'tools';
  description: string;
}

export const allProducts: Product[] = [
  {
    id: '1',
    name: 'Промышленный 3D-принтер Pro X500',
    price: '450 000 ₽',
    priceValue: 450000,
    image: 'https://ir.ozone.ru/s3/multimedia-0/6017791524.jpg',
    category: 'printers',
    description:
      'Профессиональный FDM-принтер с рабочей областью 500x500x500 мм. Поддержка различных материалов, автокалибровка стола.',
  },
  {
    id: '2',
    name: '3D-принтер Desktop Mini',
    price: '85 000 ₽',
    priceValue: 85000,
    image: 'https://avatars.mds.yandex.net/get-mpic/16096063/2a000001973ff9371172ccf3dec5fcfa81bd/orig',
    category: 'printers',
    description:
      'Компактный настольный 3D-принтер для малого бизнеса и образовательных учреждений. Простая настройка и обслуживание.',
  },
  {
    id: '3',
    name: '3D-сканер Industrial Scan Pro',
    price: '320 000 ₽',
    priceValue: 320000,
    image: 'https://ir.ozone.ru/s3/multimedia-1/6828153265.jpg',
    category: 'scanners',
    description:
      'Высокоточное сканирование объектов для реверс-инжиниринга. Точность до 0.05 мм, программное обеспечение в комплекте.',
  },
  {
    id: '4',
    name: 'Портативный 3D-сканер HandScan',
    price: '145 000 ₽',
    priceValue: 145000,
    image: 'https://3dvision.su/upload/iblock/3f2/14ofm55kg6yawzqct9lb9s5h8ail8mjs.jpg',
    category: 'scanners',
    description:
      'Мобильный ручной сканер для работы на объекте. Сканирование объектов любого размера с точностью до 0.1 мм.',
  },
  {
    id: '5',
    name: 'Печать функциональных прототипов',
    price: '5 000 ₽',
    priceValue: 5000,
    image: 'https://printex.ru/wp-content/uploads/2025/02/image-90.jpg',
    category: '3d-products',
    description: 'Быстрое прототипирование деталей из ABS, PLA, PETG пластиков. Срок изготовления 1-2 дня.',
  },
  {
    id: '6',
    name: 'Производство серийных деталей',
    price: '3 000 ₽',
    priceValue: 3000,
    image: 'https://meritogroup.ru/wp-content/uploads/2025/07/diploma.webp',
    category: '3d-products',
    description: 'Изготовление партий деталей от 10 штук. Специальные цены на крупные заказы.',
  },
  {
    id: '7',
    name: 'Филамент PLA (1 кг)',
    price: '1 800 ₽',
    priceValue: 1800,
    image: 'https://www.robo90.com/esun-pla-plus-filament-hardal-yesili-175mm-1kg-filament-esun-robo90-54414-54-B.jpg',
    category: 'materials',
    description: 'Высококачественный PLA филамент, диаметр 1.75 мм. 12 цветов в наличии.',
  },
  {
    id: '8',
    name: 'Филамент ABS Pro (1 кг)',
    price: '2 200 ₽',
    priceValue: 2200,
    image: 'https://www.promelec.ru/fs/cache/7a/3d/08/b7/51c9a69eb58541dea26c5152.jpg',
    category: 'materials',
    description: 'Прочный ABS пластик для функциональных деталей. Высокая термостойкость.',
  },
  {
    id: '9',
    name: 'Набор режущих инструментов',
    price: '12 500 ₽',
    priceValue: 12500,
    image: 'https://avatars.mds.yandex.net/get-mpic/16484647/2a00000198e52d116b55c3efefffbc11a14c/orig',
    category: 'tools',
    description:
      'Профессиональный набор для постобработки 3D-печатных изделий: ножи, надфили, шлифовальные инструменты.',
  },
];

