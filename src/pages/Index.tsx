
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import ProductGrid from '../components/ProductGrid';
import FeaturedCategories from '../components/FeaturedCategories';
import Testimonials from '../components/Testimonials';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchFeaturedProducts } from '../services/productService';
import { Product } from '../types/product';

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const products = await fetchFeaturedProducts();
        setFeaturedProducts(products);
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Banner 
          title="Veja o mundo com novos olhos"
          subtitle="Descubra nossa coleção exclusiva de óculos de sol e grau com as melhores marcas e preços."
          buttonText="Explorar Catálogo"
          buttonLink="/catalogo"
          imageSrc="https://images.unsplash.com/photo-1486570535844-68799dbcaa0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          imageAlt="Modelo usando óculos de sol"
        />

        <section className="py-16 container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-genial-red"></div>
            </div>
          ) : (
            <ProductGrid products={featuredProducts} title="Produtos em Destaque" />
          )}
        </section>

        <FeaturedCategories />
        
        <section className="py-16 bg-genial-red">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Qualidade e estilo para sua visão</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Na Ótica Genial, combinamos tecnologia avançada, designers renomados e atendimento personalizado para oferecer a melhor experiência em óculos.
            </p>
            <button className="bg-white text-genial-red px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
              Agende uma consulta
            </button>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
