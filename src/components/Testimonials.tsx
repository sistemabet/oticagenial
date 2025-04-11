
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mariana Costa',
      role: 'Cliente desde 2018',
      content: 'Sempre encontro os melhores óculos na Ótica Genial. O atendimento é sempre impecável e os produtos são de alta qualidade. Recomendo a todos!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Rafael Souza',
      role: 'Cliente desde 2020',
      content: 'Comprei meus óculos de sol aqui e fiquei impressionado com a qualidade e o preço. O processo de compra foi rápido e o produto chegou antes do prazo previsto.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Carolina Lima',
      role: 'Cliente desde 2019',
      content: 'Minha filha adorou os óculos infantis que compramos. São resistentes, leves e muito bonitos. A equipe da loja foi muito atenciosa na escolha.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-genial-darkgray text-center">O que nossos clientes dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-genial-lightgray rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${(testimonial.id - 1) * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg text-genial-darkgray">{testimonial.name}</h3>
                  <p className="text-sm text-genial-gray">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < testimonial.rating ? "#FFD700" : "none"} 
                    color={i < testimonial.rating ? "#FFD700" : "#D1D5DB"} 
                  />
                ))}
              </div>
              
              <p className="text-genial-gray italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
