import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RequestModal } from './components/RequestModal';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>();
  const [catalogCategory, setCatalogCategory] = useState<string | undefined>();

  const handleRequestClick = (productName?: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  const handleNavigate = (page: string, sectionId?: string) => {
    const isSamePage = currentPage === page;
    
    if (sectionId && sectionId.startsWith('category:')) {
      const category = sectionId.replace('category:', '');
      setCatalogCategory(category === 'all' ? undefined : category);
      setCurrentPage('catalog');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }
    
    if (sectionId) {
      if (isSamePage) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 50);
      } else {
        setCurrentPage(page);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150);
      }
    } else {
      setCurrentPage(page);
      if (page !== 'catalog') {
        setCatalogCategory(undefined);
      }
      if (isSamePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onRequestClick={handleRequestClick} onNavigate={handleNavigate} />;
      case 'catalog':
        return <Catalog onRequestClick={handleRequestClick} initialCategory={catalogCategory} />;
      case 'services':
        return <Services onRequestClick={handleRequestClick} />;
      case 'about':
        return <About />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ onRequestClick={handleRequestClick} />;
      default:
        return <Home onRequestClick={handleRequestClick} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestClick={() => handleRequestClick()}
      />

      <main>{renderPage()}</main>

      <Footer onNavigate={handleNavigate} />

      <RequestModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedProduct(undefined);
        }}
        productName={selectedProduct}
      />
    </div>
  );
}

export default App;