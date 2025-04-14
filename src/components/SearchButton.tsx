
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // TODO: Implement actual search logic
      toast({
        title: "Busca",
        description: `Procurando por: ${searchTerm}`,
      });
    } else {
      toast({
        title: "Erro",
        description: "Por favor, insira um termo de busca",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex items-center">
      <input 
        type="text" 
        placeholder="Buscar produtos..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mr-2 px-2 py-1 border rounded"
      />
      <Button 
        variant="outline" 
        size="icon" 
        onClick={handleSearch}
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SearchButton;
