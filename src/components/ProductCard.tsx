import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  onRequestClick: (productName: string) => void;
}

export function ProductCard({ name, price, image, category, description, onRequestClick }: ProductCardProps) {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden border border-gray-200 transition-all hover:shadow-xl hover:scale-[1.02] duration-300 flex flex-col"
      style={{ justifyContent: 'space-between' }}
    >
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-xs text-[#D32F2F] font-semibold">
          {category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[#212121] font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{description}</p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <div className="text-2xl text-[#D32F2F]">{price}</div>
          </div>

          <button
            onClick={() => onRequestClick(name)}
            className="px-5 py-2.5 bg-[#D32F2F] text-white text-sm rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-lg cursor-pointer"
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}
