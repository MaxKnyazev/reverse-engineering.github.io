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

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleRequestClick = (productName?: string) => {
    setSelectedProduct(productName);
    setModalOpen(true);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onRequestClick={handleRequestClick} onNavigate={handleNavigate} />;
      case 'catalog':
        return <Catalog onRequestClick={handleRequestClick} />;
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