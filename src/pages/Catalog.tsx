import { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { Grid, List } from 'lucide-react';
import { allProducts } from '@/constants/products';
import { cn } from '@/components/ui/utils';

interface CatalogProps {
  onRequestClick: (productName?: string) => void;
}

export function Catalog({ onRequestClick }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const priceMatch = product.priceValue >= priceRange[0] && product.priceValue <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, priceRange]);

  return (
    <div className="pt-32 pb-20 bg-[#F8F9FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-[#212121] mb-2">Каталог товаров</h1>
          <p className="text-gray-600">
            Найдено товаров: <span className="font-semibold text-[#D32F2F]">{filteredProducts.length}</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            {/* View Mode Toggle */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                Показано {filteredProducts.length} из {allProducts.length} товаров
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'p-2 rounded-lg transition-colors',
                    viewMode === 'grid'
                      ? 'bg-[#D32F2F] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  )}
                  aria-label="Сетка"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    'p-2 rounded-lg transition-colors',
                    viewMode === 'list'
                      ? 'bg-[#D32F2F] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  )}
                  aria-label="Список"
                >
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div
                className={cn(
                  viewMode === 'grid'
                    ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6'
                    : 'flex flex-col gap-6'
                )}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} onRequestClick={onRequestClick} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center">
                <p className="text-gray-500">Товары не найдены. Попробуйте изменить фильтры.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
