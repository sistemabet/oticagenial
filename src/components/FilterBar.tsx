
import React from 'react';

interface FilterBarProps {
  brands: string[];
  selectedBrand: string;
  selectedType: string;
  onBrandChange: (brand: string) => void;
  onTypeChange: (type: string) => void;
  onSort: (sortBy: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  brands,
  selectedBrand,
  selectedType,
  onBrandChange,
  onTypeChange,
  onSort
}) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Brand filter */}
        <div>
          <label htmlFor="brand-filter" className="block text-sm font-medium text-genial-gray mb-2">
            Marca
          </label>
          <select
            id="brand-filter"
            value={selectedBrand}
            onChange={(e) => onBrandChange(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-genial-red focus:ring focus:ring-genial-red focus:ring-opacity-20 transition-colors"
          >
            <option value="">Todas as marcas</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Type filter */}
        <div>
          <label htmlFor="type-filter" className="block text-sm font-medium text-genial-gray mb-2">
            Tipo
          </label>
          <select
            id="type-filter"
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-genial-red focus:ring focus:ring-genial-red focus:ring-opacity-20 transition-colors"
          >
            <option value="">Todos os tipos</option>
            <option value="solar">Óculos de Sol</option>
            <option value="grau">Óculos de Grau</option>
            <option value="infantil">Infantil</option>
          </select>
        </div>

        {/* Sort options */}
        <div>
          <label htmlFor="sort-options" className="block text-sm font-medium text-genial-gray mb-2">
            Ordenar por
          </label>
          <select
            id="sort-options"
            onChange={(e) => onSort(e.target.value)}
            defaultValue="featured"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-genial-red focus:ring focus:ring-genial-red focus:ring-opacity-20 transition-colors"
          >
            <option value="featured">Destaque</option>
            <option value="price-asc">Preço: Menor para Maior</option>
            <option value="price-desc">Preço: Maior para Menor</option>
            <option value="name-asc">Nome: A-Z</option>
            <option value="name-desc">Nome: Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
