import { Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useMemo } from 'react';
import { heroSlides, advantages, testimonials } from '@/constants/homeData';
import { allProducts } from '@/constants/products';
import { cn } from '../components/ui/utils';

interface HomeProps {
  onRequestClick: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function Home({ onRequestClick, onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = useMemo(() => {
    return allProducts.slice(0, 3);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#D32F2F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D32F2F] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            {/* Slider Content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((slide, index) => (
                  <div key={index} className="min-w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
                      <div>
                        <h1 className="text-[2rem] mb-6">{slide.title}</h1>
                        <p className="text-xl text-gray-200 mb-8">
                          {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <button
                            onClick={() => onRequestClick()}
                            className="px-8 py-4 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-2xl hover:scale-105"
                          >
                            Оставить заявку
                          </button>
                          <button
                            onClick={() => onNavigate(slide.page)}
                            className="px-8 py-4 bg-white text-[#212121] rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl"
                          >
                            {slide.buttonText}
                          </button>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                          <ImageWithFallback
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all',
                    index === currentSlide
                      ? 'bg-[#D32F2F] w-8'
                      : 'bg-white/50 hover:bg-white/70'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">
            Наши преимущества
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] rounded-xl p-8 text-center hover:shadow-xl transition-all hover:scale-105 border border-gray-200"
              >
                <div className="w-16 h-16 bg-[#D32F2F] bg-opacity-10 rounded-full flex items-center justify-center text-[#D32F2F] mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-[#212121] mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[#212121]">
              Популярные товары
            </h2>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors"
            >
              Смотреть все →
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onRequestClick={onRequestClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[#212121] mb-12">
            Отзывы клиентов
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] rounded-xl p-8 border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#D32F2F] text-[#D32F2F]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-[#212121]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Оставьте заявку, и наш менеджер свяжется с вами для
            консультации
          </p>
          <button
            onClick={() => onRequestClick()}
            className="px-8 py-4 bg-white text-[#D32F2F] rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105"
          >
            Получить консультацию
          </button>
        </div>
      </section>
    </div>
  );
}
