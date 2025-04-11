
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchProductById, fetchAllProducts } from '../services/productService';
import { Product } from '../types/product';
import { ShoppingCart, Heart, Share2, ArrowLeft, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        const productData = await fetchProductById(Number(id));
        if (productData) {
          setProduct(productData);
          setMainImage(productData.imageUrl);
          
          // Load related products (same type)
          const allProducts = await fetchAllProducts();
          const related = allProducts
            .filter(p => p.type === productData.type && p.id !== productData.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error loading product details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (!product || !product.inStock) return;

    // In a real application, this would integrate with a cart system
    console.log('Added to cart:', { ...product, quantity });
    setAddedToCart(true);
    
    // Reset the added to cart status after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-genial-red"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center py-16">
            <h2 className="text-2xl text-genial-gray mb-4">Produto não encontrado</h2>
            <Link to="/catalogo" className="text-genial-red hover:underline flex items-center justify-center">
              <ArrowLeft size={16} className="mr-2" /> Voltar ao Catálogo
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-genial-gray hover:text-genial-red transition-colors">
                  Início
                </Link>
              </li>
              <li className="text-genial-gray">/</li>
              <li>
                <Link to="/catalogo" className="text-genial-gray hover:text-genial-red transition-colors">
                  Catálogo
                </Link>
              </li>
              <li className="text-genial-gray">/</li>
              <li>
                <Link to={`/${product.type}`} className="text-genial-gray hover:text-genial-red transition-colors">
                  {product.type === 'solar' ? 'Óculos de Sol' : 
                   product.type === 'grau' ? 'Óculos de Grau' : 'Infantil'}
                </Link>
              </li>
              <li className="text-genial-gray">/</li>
              <li className="text-genial-darkgray font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              
              {/* For now just showing the same image multiple times as a placeholder */}
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, index) => (
                  <button 
                    key={index}
                    className={`border-2 rounded-md overflow-hidden ${
                      mainImage === product.imageUrl ? 'border-genial-red' : 'border-gray-200'
                    }`}
                    onClick={() => setMainImage(product.imageUrl)}
                  >
                    <img 
                      src={product.imageUrl} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-2">
                <span className={`
                  inline-block px-2 py-1 text-xs font-semibold rounded-full
                  ${product.type === 'solar' ? 'bg-yellow-400 text-yellow-900' : 
                    product.type === 'grau' ? 'bg-blue-400 text-blue-900' : 
                    'bg-pink-400 text-pink-900'}
                `}>
                  {product.type === 'solar' ? 'Solar' : product.type === 'grau' ? 'Grau' : 'Infantil'}
                </span>
                <span className="inline-block ml-2 text-sm font-medium text-genial-red">
                  {product.brand}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-genial-darkgray mb-4">{product.name}</h1>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-genial-darkgray">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-gray-500 ml-2">à vista</span>
              </div>

              <p className="text-genial-gray mb-8">{product.description}</p>

              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                  <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'Em estoque' : 'Esgotado'}
                  </span>
                </div>
              </div>

              {product.inStock && (
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      className="px-3 py-2 border-r border-gray-300 text-genial-gray hover:text-genial-red transition-colors"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button 
                      className="px-3 py-2 border-l border-gray-300 text-genial-gray hover:text-genial-red transition-colors"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  className={`btn-genial flex items-center ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''} ${addedToCart ? 'bg-green-600' : ''}`}
                  disabled={!product.inStock}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <>
                      <Check size={18} className="mr-2" />
                      Adicionado ao Carrinho
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} className="mr-2" />
                      Adicionar ao Carrinho
                    </>
                  )}
                </button>
                
                <button className="border border-genial-gray text-genial-gray px-4 py-2 rounded-md hover:bg-genial-gray hover:text-white transition-colors duration-300 flex items-center">
                  <Heart size={18} className="mr-2" />
                  Favoritar
                </button>
                
                <button className="border border-genial-gray text-genial-gray px-4 py-2 rounded-md hover:bg-genial-gray hover:text-white transition-colors duration-300 flex items-center">
                  <Share2 size={18} className="mr-2" />
                  Compartilhar
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="section-title text-genial-darkgray mb-8">Produtos Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
