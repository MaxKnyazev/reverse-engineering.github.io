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
    image: 'https://1-office.ru/upload/iblock/9da/9dac9734e693fd1b771183a31c42d353.jpg',
    category: 'printers',
    description:
      'Профессиональный FDM-принтер с рабочей областью 500x500x500 мм. Поддержка различных материалов, автокалибровка стола.',
  },
  {
    id: '2',
    name: '3D-принтер Desktop Mini',
    price: '85 000 ₽',
    priceValue: 85000,
    image: 'https://s.alicdn.com/@img/imgextra/i1/6000000007690/O1CN01MficSS26g4SCLgvE2_!!6000000007690-0-tbvideo.jpg_720x720q50.jpg',
    category: 'printers',
    description:
      'Компактный настольный 3D-принтер для малого бизнеса и образовательных учреждений. Простая настройка и обслуживание.',
  },
  {
    id: '3',
    name: '3D-сканер Industrial Scan Pro',
    price: '320 000 ₽',
    priceValue: 320000,
    image:
      'https://images.unsplash.com/photo-1694898828036-cf4d95e80e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwM2QlMjBzY2FubmVyfGVufDF8fHx8MTc2OTA4NzE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'scanners',
    description:
      'Высокоточное сканирование объектов для реверс-инжиниринга. Точность до 0.05 мм, программное обеспечение в комплекте.',
  },
  {
    id: '4',
    name: 'Портативный 3D-сканер HandScan',
    price: '145 000 ₽',
    priceValue: 145000,
    image: 'https://www.sep.ae/storage/app/products/handyscan-3d-silver-series-1.jpg',
    category: 'scanners',
    description:
      'Мобильный ручной сканер для работы на объекте. Сканирование объектов любого размера с точностью до 0.1 мм.',
  },
  {
    id: '5',
    name: 'Печать функциональных прототипов',
    price: '5 000 ₽',
    priceValue: 5000,
    image:
      'https://images.unsplash.com/photo-1739515054273-a2956b1e094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZWQlMjBwYXJ0cyUyMHByb3RvdHlwZXxlbnwxfHx8fDE3NjkwODcxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: '3d-products',
    description: 'Быстрое прототипирование деталей из ABS, PLA, PETG пластиков. Срок изготовления 1-2 дня.',
  },
  {
    id: '6',
    name: 'Производство серийных деталей',
    price: '3 000 ₽',
    priceValue: 3000,
    image:
      'https://images.unsplash.com/photo-1758873263563-5ba4aa330799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2OTA4NzE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: '3d-products',
    description: 'Изготовление партий деталей от 10 штук. Специальные цены на крупные заказы.',
  },
  {
    id: '7',
    name: 'Филамент PLA (1 кг)',
    price: '1 800 ₽',
    priceValue: 1800,
    image: 'https://avatars.mds.yandex.net/get-mpic/14708310/2a0000019a38fe58e06f1a3db931e29c5468/orig',
    category: 'materials',
    description: 'Высококачественный PLA филамент, диаметр 1.75 мм. 12 цветов в наличии.',
  },
  {
    id: '8',
    name: 'Филамент ABS Pro (1 кг)',
    price: '2 200 ₽',
    priceValue: 2200,
    image:
      'https://lh3.googleusercontent.com/QxwBvInKcNcFczmQ_rbaVL9hmAFzOIifLBlah2mt599p4PDKq7JQvNhN7CumVHQcwQKui6JuQ9ana3cEGfybKc0=w1200-h630-c0xffffff-rj-pc0xffffff-pd',
    category: 'materials',
    description: 'Прочный ABS пластик для функциональных деталей. Высокая термостойкость.',
  },
  {
    id: '9',
    name: 'Набор режущих инструментов',
    price: '12 500 ₽',
    priceValue: 12500,
    image:
      'https://images.unsplash.com/photo-1758873263563-5ba4aa330799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2OTA4NzE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tools',
    description:
      'Профессиональный набор для постобработки 3D-печатных изделий: ножи, надфили, шлифовальные инструменты.',
  },
];

