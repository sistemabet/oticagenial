import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import SearchButton from './SearchButton';  // Import the new SearchButton

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-genial-red">Ótica Genial</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-genial-gray hover:text-genial-red transition-colors">
              Início
            </Link>
            <Link to="/catalogo" className="text-genial-gray hover:text-genial-red transition-colors">
              Catálogo
            </Link>
            <Link to="/solar" className="text-genial-gray hover:text-genial-red transition-colors">
              Óculos de Sol
            </Link>
            <Link to="/grau" className="text-genial-gray hover:text-genial-red transition-colors">
              Óculos de Grau
            </Link>
            <Link to="/infantil" className="text-genial-gray hover:text-genial-red transition-colors">
              Infantil
            </Link>
          </div>

          {/* Icons and Search */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchButton />  {/* Add SearchButton here */}
            <button aria-label="Minha conta" className="text-genial-gray hover:text-genial-red transition-colors">
              <User size={20} />
            </button>
            <button aria-label="Carrinho" className="text-genial-gray hover:text-genial-red transition-colors">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-genial-gray hover:text-genial-red transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-genial-gray hover:text-genial-red transition-colors" onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
              <Link to="/catalogo" className="text-genial-gray hover:text-genial-red transition-colors" onClick={() => setIsMenuOpen(false)}>
                Catálogo
              </Link>
              <Link to="/solar" className="text-genial-gray hover:text-genial-red transition-colors" onClick={() => setIsMenuOpen(false)}>
                Óculos de Sol
              </Link>
              <Link to="/grau" className="text-genial-gray hover:text-genial-red transition-colors" onClick={() => setIsMenuOpen(false)}>
                Óculos de Grau
              </Link>
              <Link to="/infantil" className="text-genial-gray hover:text-genial-red transition-colors" onClick={() => setIsMenuOpen(false)}>
                Infantil
              </Link>
              <div className="flex space-x-4 pt-2">
                <button aria-label="Buscar" className="text-genial-gray hover:text-genial-red transition-colors">
                  <Search size={20} />
                </button>
                <button aria-label="Minha conta" className="text-genial-gray hover:text-genial-red transition-colors">
                  <User size={20} />
                </button>
                <button aria-label="Carrinho" className="text-genial-gray hover:text-genial-red transition-colors">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
