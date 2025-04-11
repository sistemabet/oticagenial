
# API da Ótica Genial

Esta é a API para o site da Ótica Genial, que se conecta ao banco de dados MySQL.

## Instalação

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Configure o arquivo `.env` com suas credenciais de banco de dados
4. Inicie o servidor com `npm start` ou `npm run dev` para desenvolvimento

## Endpoints

- `GET /api/products`: Lista todos os produtos
- `GET /api/products/:id`: Obtém um produto pelo ID
- `GET /api/products/featured/list`: Lista produtos em destaque
- `GET /api/products/type/:type`: Lista produtos por tipo (solar, grau, infantil)
- `GET /api/products/brand/:brand`: Lista produtos por marca
- `GET /api/products/brands/list`: Lista todas as marcas disponíveis
- `GET /api/health`: Verifica o status da API

## Estrutura do banco de dados esperada

A API espera que exista uma tabela `products` com os seguintes campos:
- id (int)
- name (varchar)
- price (decimal)
- description (text)
- brand (varchar)
- type (enum: 'solar', 'grau', 'infantil')
- imageUrl (varchar)
- inStock (boolean)
- featured (boolean)
