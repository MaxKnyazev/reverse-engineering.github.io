import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/7760e2a5004e86ae1d04ece7c0620c45fd399cb3.png';
import { menuItems } from '../constants/menuItems';
import { colors } from '../constants/colors';
import { cn } from './ui/utils';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onRequestClick: () => void;
}

export function Header({ currentPage, onNavigate, onRequestClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  'text-sm transition-colors',
                  currentPage === item.id
                    ? 'text-[#D32F2F] font-semibold'
                    : 'text-[#212121] hover:text-[#D32F2F]'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={onRequestClick}
            className="hidden lg:block px-6 py-3 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all hover:shadow-lg"
            aria-label="Оставить заявку"
          >
            Оставить заявку
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#212121]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'text-left px-4 py-2 rounded-lg transition-colors',
                    currentPage === item.id
                      ? 'text-[#D32F2F] bg-red-50 font-semibold'
                      : 'text-[#212121] hover:bg-gray-50'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onRequestClick();
                  setMobileMenuOpen(false);
                }}
                className="mx-4 px-6 py-3 bg-[#D32F2F] text-white rounded-lg hover:bg-[#B71C1C] transition-all"
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