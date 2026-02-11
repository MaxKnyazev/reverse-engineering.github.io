import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { categories } from '@/constants/categories';

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: FilterSidebarProps) {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
      <h2 className="text-[#212121] mb-6">Фильтры</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => setCategoryOpen(!categoryOpen)}
          className="flex items-center justify-between w-full mb-4 cursor-pointer"
        >
          <span className="font-semibold text-[#212121]">Категория</span>
          {categoryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {categoryOpen && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  value={cat.id}
                  checked={selectedCategory === cat.id}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="w-4 h-4 text-[#D32F2F] focus:ring-[#D32F2F]"
                />
                <span className="text-sm text-gray-700 group-hover:text-[#D32F2F] transition-colors">
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button
          onClick={() => setPriceOpen(!priceOpen)}
          className="flex items-center justify-between w-full mb-4 cursor-pointer"
        >
          <span className="font-semibold text-[#212121]">Цена</span>
          {priceOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {priceOpen && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
                placeholder="От"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F]"
                placeholder="До"
              />
            </div>

            <div className="space-y-2">
              <button
                onClick={() => onPriceChange([0, 50000])}
                className="text-sm text-gray-600 hover:text-[#D32F2F] transition-colors cursor-pointer"
              >
                До 50 000 ₽
              </button>
              <br />
              <button
                onClick={() => onPriceChange([50000, 200000])}
                className="text-sm text-gray-600 hover:text-[#D32F2F] transition-colors cursor-pointer"
              >
                50 000 - 200 000 ₽
              </button>
              <br />
              <button
                onClick={() => onPriceChange([200000, 500000])}
                className="text-sm text-gray-600 hover:text-[#D32F2F] transition-colors cursor-pointer"
              >
                200 000 - 500 000 ₽
              </button>
              <br />
              <button
                onClick={() => onPriceChange([500000, 10000000])}
                className="text-sm text-gray-600 hover:text-[#D32F2F] transition-colors cursor-pointer"
              >
                Более 500 000 ₽
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
