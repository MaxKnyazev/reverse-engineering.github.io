import { Star } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useMemo, useRef, useEffect } from 'react';
import { heroSlides, advantages, testimonials } from '@/constants/homeData';
import { allProducts } from '@/constants/products';
import { cn } from '../components/ui/utils';

interface HomeProps {
  onRequestClick: (productName?: string) => void;
  onNavigate: (page: string) => void;
}

export function Home({ onRequestClick, onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxTitleHeight, setMaxTitleHeight] = useState<number>(0);
  const [maxDescriptionHeight, setMaxDescriptionHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const featuredProducts = useMemo(() => {
    return allProducts.slice(0, 3);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      return mobile;
    };

    const measureHeights = () => {
      const mobile = checkMobile();
      
      if (!mobile) {
        setMaxTitleHeight(0);
        setMaxDescriptionHeight(0);
        return;
      }

      const titleHeights = titleRefs.current
        .filter((ref) => ref !== null)
        .map((ref) => ref!.scrollHeight);
      const maxTitle = titleHeights.length > 0 ? Math.max(...titleHeights) : 0;

      const descriptionHeights = descriptionRefs.current
        .filter((ref) => ref !== null)
        .map((ref) => ref!.scrollHeight);
      const maxDescription = descriptionHeights.length > 0 ? Math.max(...descriptionHeights) : 0;

      setMaxTitleHeight(maxTitle);
      setMaxDescriptionHeight(maxDescription);
    };

    checkMobile();
    
    const timeoutId = setTimeout(measureHeights, 100);
    
    window.addEventListener('resize', measureHeights);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', measureHeights);
    };
  }, []);

  const resetAutoSlideTimer = useRef(() => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = null;
    }
    
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev < heroSlides.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 6000);
  });

  useEffect(() => {
    resetAutoSlideTimer.current();
    
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < heroSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      resetAutoSlideTimer.current();
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      resetAutoSlideTimer.current();
    }
  };

  const handleSlideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 1024) return;
    
    const target = e.target as HTMLElement;
    if (target.tagName === 'BUTTON' || target.closest('button')) {
      return;
    }
    
    const clickX = e.clientX;
    const screenWidth = window.innerWidth;
    const middleX = screenWidth / 2;
    
    if (clickX > middleX && currentSlide < heroSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      resetAutoSlideTimer.current();
    }
    else if (clickX < middleX && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      resetAutoSlideTimer.current();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="relative bg-[#212121] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#D32F2F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D32F2F] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            {/* Slider Content */}
            <div 
              className="overflow-hidden py-4"
              style={{
                paddingTop: !isMobile ? '3rem' : undefined,
                paddingBottom: !isMobile ? '3rem' : undefined,
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onClick={handleSlideClick}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((slide, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div 
                      className="grid lg:grid-cols-2 gap-6 items-center min-h-[500px] lg:min-h-0"
                      style={{
                        gap: !isMobile ? '4rem' : undefined,
                      }}
                    >
                      <div className="flex flex-col justify-center">
                        <h1
                          ref={(el) => {
                            titleRefs.current[index] = el;
                          }}
                          className="text-[2rem] mb-3 lg:min-h-0"
                          style={{
                            minHeight:
                              maxTitleHeight > 0 && isMobile
                                ? `${maxTitleHeight}px`
                                : undefined,
                            marginBottom: !isMobile ? '2.5rem' : undefined,
                          }}
                        >
                          {slide.title}
                        </h1>
                        <p
                          ref={(el) => {
                            descriptionRefs.current[index] = el;
                          }}
                          className="text-xl text-gray-200 mb-4 lg:min-h-0"
                          style={{
                            minHeight:
                              maxDescriptionHeight > 0 && isMobile
                                ? `${maxDescriptionHeight}px`
                                : undefined,
                            marginBottom: !isMobile ? '3rem' : undefined,
                          }}
                        >
                          {slide.description}
                        </p>
                        <div className="flex flex-col lg:block gap-3 lg:gap-0 justify-center">
                          <button
                            onClick={() => onRequestClick()}
                            className="w-[280px] lg:inline-block lg:w-auto mb-3 lg:mb-0 px-8 py-4 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
                            style={{
                              marginRight: !isMobile ? '20px' : undefined,
                            }}
                          >
                            Оставить заявку
                          </button>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate(slide.page);
                            }}
                            className="w-[280px] lg:inline-block lg:w-auto mb-0 px-8 py-4 bg-white text-[#212121] rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl whitespace-nowrap text-center cursor-pointer"
                          >
                            {slide.buttonText}
                          </a>
                        </div>
                      </div>

                      <div className="relative px-4">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.25)]">
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
                  onClick={() => {
                    setCurrentSlide(index);
                    resetAutoSlideTimer.current();
                  }}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all cursor-pointer',
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
      <section id="advantages" className="py-20 bg-white">
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
      <section id="products" className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[#212121]">
              Популярные товары
            </h2>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('catalog');
              }}
              className="text-[#D32F2F] hover:text-[#B71C1C] transition-colors"
            >
              Смотреть все →
            </a>
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
      <section id="testimonials" className="py-20 bg-white">
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
      <section id="cta" className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Готовы начать проект?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Оставьте заявку, и наш менеджер свяжется с вами для
            консультации
          </p>
          <button
            onClick={() => onRequestClick()}
            className="px-8 py-4 bg-white text-[#D32F2F] rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 cursor-pointer"
          >
            Получить консультацию
          </button>
        </div>
      </section>
    </div>
  );
}
