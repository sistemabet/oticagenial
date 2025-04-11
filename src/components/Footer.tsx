
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-genial-darkgray text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ótica Genial</h3>
            <p className="text-gray-300 mb-4">
              Oferecendo produtos de qualidade e atendimento especializado desde 2005.
              Sua visão é nossa prioridade.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-genial-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-genial-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-genial-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-genial-red transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-genial-red transition-colors">Catálogo</Link>
              </li>
              <li>
                <Link to="/solar" className="text-gray-300 hover:text-genial-red transition-colors">Óculos de Sol</Link>
              </li>
              <li>
                <Link to="/grau" className="text-gray-300 hover:text-genial-red transition-colors">Óculos de Grau</Link>
              </li>
              <li>
                <Link to="/infantil" className="text-gray-300 hover:text-genial-red transition-colors">Infantil</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Ajuda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-genial-red transition-colors">Perguntas Frequentes</Link>
              </li>
              <li>
                <Link to="/entrega" className="text-gray-300 hover:text-genial-red transition-colors">Política de Entrega</Link>
              </li>
              <li>
                <Link to="/devolucao" className="text-gray-300 hover:text-genial-red transition-colors">Política de Devolução</Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-300 hover:text-genial-red transition-colors">Privacidade</Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-300 hover:text-genial-red transition-colors">Termos de Uso</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Rua das Flores, 123 - Centro<br />São Paulo - SP, 01234-567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-gray-300">(11) 5555-1234</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-gray-300">contato@oticagenial.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Ótica Genial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
