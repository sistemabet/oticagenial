
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
  const categories = [
    {
      name: 'Óculos de Sol',
      description: 'Proteção e estilo para seus dias ensolarados',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      link: '/solar'
    },
    {
      name: 'Óculos de Grau',
      description: 'Conforto e nitidez para sua visão diária',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      link: '/grau'
    },
    {
      name: 'Infantil',
      description: 'Opções seguras e divertidas para os pequenos',
      image: 'https://images.unsplash.com/photo-1533511627347-4d5ff8e24220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      link: '/infantil'
    }
  ];

  return (
    <section className="py-16 bg-genial-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-genial-darkgray text-center">Nossas Categorias</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-genial-gray mb-4">{category.description}</p>
                <Link 
                  to={category.link} 
                  className="btn-genial inline-block"
                >
                  Ver Produtos
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
