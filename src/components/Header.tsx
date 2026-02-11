import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import logo from '../assets/7760e2a5004e86ae1d04ece7c0620c45fd399cb3.png';
import { menuItems } from '../constants/menuItems';
import { colors } from '../constants/colors';
import { pageSections } from '../constants/pageSections';
import { cn } from './ui/utils';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestClick: () => void;
}

export function Header({ currentPage, onNavigate, onRequestClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <header 
      className="fixed top-0 left-0 right-0 border-b border-gray-200 z-50 shadow-sm" 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.75)', 
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#"
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logo} alt="REVERSE-ENGINEERING" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-[#212121] font-bold text-lg leading-tight">REVERSE-ENGINEERING</div>
              <div className="text-[#D32F2F] text-xs tracking-wide">3D SOLUTIONS</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => {
              const sections = pageSections[item.id] || [];
              const hasSections = sections.length > 0;

              return (
                <div
                  key={item.id}
                  className="relative py-2 px-1 -mx-1"
                  onMouseEnter={() => {
                    if (hasSections) {
                      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                      setHoveredItem(item.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasSections) {
                      hoverTimeoutRef.current = setTimeout(() => {
                        setHoveredItem(null);
                      }, 200);
                    }
                  }}
                >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                    onMouseEnter={() => {
                      if (hasSections) {
                        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                        setHoveredItem(item.id);
                      }
                    }}
                className={cn(
                      'text-sm transition-colors flex items-center gap-1 cursor-pointer',
                  currentPage === item.id
                    ? 'text-[#D32F2F] font-semibold'
                    : 'text-[#212121] hover:text-[#D32F2F]'
                )}
              >
                {item.label}
                    {hasSections && (
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform',
                          hoveredItem === item.id && 'rotate-180'
                        )}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {hasSections && hoveredItem === item.id && (
                    <div 
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                      style={{
                        animation: 'fadeInDown 0.2s ease-out',
                        width: 'max-content',
                        minWidth: 'fit-content',
                      }}
                      onMouseEnter={() => {
                        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                        setHoveredItem(item.id);
                      }}
                      onMouseLeave={() => {
                        hoverTimeoutRef.current = setTimeout(() => {
                          setHoveredItem(null);
                        }, 200);
                      }}
                    >
                      {sections.map((section) => (
                        <a
                          key={section.id}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onNavigate(item.id, section.id);
                            setHoveredItem(null);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-[#212121] hover:bg-gray-50 hover:text-[#D32F2F] transition-colors whitespace-nowrap cursor-pointer"
                        >
                          {section.label}
              </a>
            ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <button
            onClick={onRequestClick}
            className="hidden lg:block px-6 py-3 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-lg cursor-pointer"
            aria-label="Оставить заявку"
          >
            Оставить заявку
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#212121] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => {
                const sections = pageSections[item.id] || [];
                const hasSections = sections.length > 0;

                return (
                  <div key={item.id}>
                {hasSections ? (
                  <button
                    onClick={() => {
                      setExpandedMobileItem(expandedMobileItem === item.id ? null : item.id);
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer',
                      currentPage === item.id
                        ? 'text-[#D32F2F] bg-red-50 font-semibold'
                        : 'text-[#212121] hover:bg-gray-50'
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        expandedMobileItem === item.id && 'rotate-180'
                      )}
                    />
                  </button>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer',
                      currentPage === item.id
                        ? 'text-[#D32F2F] bg-red-50 font-semibold'
                        : 'text-[#212121] hover:bg-gray-50'
                    )}
                  >
                    {item.label}
                  </a>
                )}
                    {hasSections && expandedMobileItem === item.id && (
                      <div className="pl-4 mt-1 space-y-1">
                        {sections.map((section) => (
                          <a
                            key={section.id}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate(item.id, section.id);
                              setMobileMenuOpen(false);
                              setExpandedMobileItem(null);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#D32F2F] rounded-lg transition-colors cursor-pointer"
                          >
                            {section.label}
                </a>
              ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <button
                onClick={() => {
                  onRequestClick();
                  setMobileMenuOpen(false);
                }}
                className="mx-4 px-6 py-3 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all cursor-pointer"
              >
                Оставить заявку
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}