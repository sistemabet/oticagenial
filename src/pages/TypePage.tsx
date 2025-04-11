
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import FilterBar from '../components/FilterBar';
import Banner from '../components/Banner';
import { fetchProductsByType, fetchAllBrands } from '../services/productService';
import { Product } from '../types/product';
import { useParams } from 'react-router-dom';

const TypePage = () => {
  const { type } = useParams<{ type: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Define banner content based on product type
  const getBannerContent = () => {
    switch (type) {
      case 'solar':
        return {
          title: 'Óculos de Sol',
          subtitle: 'Proteção UV e estilo para seus dias ensolarados',
          image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        };
      case 'grau':
        return {
          title: 'Óculos de Grau',
          subtitle: 'Conforto, nitidez e estilo para o seu dia a dia',
          image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        };
      case 'infantil':
        return {
          title: 'Óculos Infantis',
          subtitle: 'Opções seguras, resistentes e divertidas para as crianças',
          image: 'https://images.unsplash.com/photo-1533511627347-4d5ff8e24220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
        };
      default:
        return {
          title: 'Catálogo de Óculos',
          subtitle: 'Conheça nossa coleção completa',
          image: 'https://images.unsplash.com/photo-1486570535844-68799dbcaa0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
        };
    }
  };

  const bannerContent = getBannerContent();

  useEffect(() => {
    if (!type) return;

    const loadData = async () => {
      setIsLoading(true);
      try {
        const productType = type as 'solar' | 'grau' | 'infantil';
        const [typeProducts, allBrands] = await Promise.all([
          fetchProductsByType(productType),
          fetchAllBrands()
        ]);
        
        setProducts(typeProducts);
        setFilteredProducts(typeProducts);
        setBrands(allBrands);
      } catch (error) {
        console.error(`Error loading ${type} products:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [type]);

  useEffect(() => {
    // Apply brand filter
    if (selectedBrand) {
      const filtered = products.filter(product => product.brand === selectedBrand);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedBrand, products]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handleSort = (sortBy: string) => {
    const sortedProducts = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'featured':
      default:
        sortedProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Banner 
          title={bannerContent.title}
          subtitle={bannerContent.subtitle}
          buttonText="Explorar Produtos"
          buttonLink="#produtos"
          imageSrc={bannerContent.image}
          imageAlt={bannerContent.title}
        />

        <div id="produtos" className="container mx-auto px-4 py-12">
          <FilterBar 
            brands={brands}
            selectedBrand={selectedBrand}
            selectedType=""
            onBrandChange={handleBrandChange}
            onTypeChange={() => {}}
            onSort={handleSort}
          />
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-genial-red"></div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-genial-gray">Nenhum produto encontrado com os filtros selecionados.</h3>
              <button 
                onClick={() => setSelectedBrand('')}
                className="mt-4 text-genial-red hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TypePage;
