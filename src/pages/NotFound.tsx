
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center py-16">
          <h1 className="text-8xl font-bold text-genial-red mb-4">404</h1>
          <p className="text-2xl text-genial-darkgray mb-8">Página não encontrada</p>
          <p className="text-genial-gray text-center max-w-md mb-8">
            A página que você está procurando pode ter sido removida, 
            seu nome pode ter sido alterado ou está temporariamente indisponível.
          </p>
          <Link 
            to="/" 
            className="btn-genial flex items-center"
          >
            <Home size={18} className="mr-2" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
