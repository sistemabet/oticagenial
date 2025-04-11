
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import FilterBar from '../components/FilterBar';
import { fetchAllProducts, fetchAllBrands } from '../services/productService';
import { Product } from '../types/product';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [allProducts, allBrands] = await Promise.all([
          fetchAllProducts(),
          fetchAllBrands()
        ]);
        
        setProducts(allProducts);
        setFilteredProducts(allProducts);
        setBrands(allBrands);
      } catch (error) {
        console.error('Error loading catalog data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    // Apply filters
    let result = [...products];
    
    if (selectedBrand) {
      result = result.filter(product => product.brand === selectedBrand);
    }
    
    if (selectedType) {
      result = result.filter(product => product.type === selectedType);
    }
    
    setFilteredProducts(result);
  }, [selectedBrand, selectedType, products]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
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
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-genial-darkgray mb-8">Catálogo Completo</h1>
          
          <FilterBar 
            brands={brands}
            selectedBrand={selectedBrand}
            selectedType={selectedType}
            onBrandChange={handleBrandChange}
            onTypeChange={handleTypeChange}
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
                onClick={() => {
                  setSelectedBrand('');
                  setSelectedType('');
                }}
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

export default Catalog;
