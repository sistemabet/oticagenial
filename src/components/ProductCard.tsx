
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, brand, imageUrl, inStock, type } = product;

  return (
    <div className="product-card group animate-fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className={`
            inline-block px-2 py-1 text-xs font-semibold rounded-full
            ${type === 'solar' ? 'bg-yellow-400 text-yellow-900' : 
              type === 'grau' ? 'bg-blue-400 text-blue-900' : 
              'bg-pink-400 text-pink-900'}
          `}>
            {type === 'solar' ? 'Solar' : type === 'grau' ? 'Grau' : 'Infantil'}
          </span>
        </div>
        
        {/* Stock status */}
        {!inStock && (
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full font-medium">
              Esgotado
            </span>
          </div>
        )}
        
        {/* Quick actions */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex justify-between">
            <Link 
              to={`/produto/${id}`} 
              className="flex items-center justify-center bg-white text-genial-darkgray rounded-full p-2 hover:bg-genial-red hover:text-white transition-colors"
              aria-label="Ver detalhes"
            >
              <Eye size={18} />
            </Link>
            <button 
              className={`flex items-center justify-center rounded-full p-2 transition-colors ${
                inStock 
                  ? 'bg-genial-red text-white hover:bg-red-700' 
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
              disabled={!inStock}
              aria-label="Adicionar ao carrinho"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-genial-red font-semibold">{brand}</p>
        <h3 className="font-semibold text-lg mt-1 mb-2 text-genial-darkgray">
          <Link to={`/produto/${id}`} className="hover:text-genial-red transition-colors">
            {name}
          </Link>
        </h3>
        <p className="text-xl font-bold text-genial-darkgray">
          R$ {price.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
