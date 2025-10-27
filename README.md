# 🛒 E-commerce — Projeto Full Stack

### 📋 Descrição Geral

Este projeto foi desenvolvido como parte de um desafio técnico com o objetivo de implementar um sistema simples de e-commerce com back-end em Node.js/Express e front-end em React.

A aplicação permite listar produtos, adicionar itens ao carrinho e finalizar a compra, simulando o fluxo principal de uma loja virtual.

### 🚀 Tecnologias Utilizadas

#### 🧠 Back-end

- Node.js com Express

- PostgreSQL com node-postgres (pg)

- CORS para integração com o front-end

- dotenv para gerenciamento de variáveis de ambiente


#### 💻 Front-end

- React (Create React App)

- Hooks (useState, useEffect)

- Fetch API para comunicação com o back-end

- CSS puro para estilização


### ⚙️ Funcionalidades

#### 🖥️ Front-end

- Exibe uma listagem de produtos vinda da API (GET /produtos)

- Permite adicionar e remover itens do carrinho

- Mostra o subtotal e o total da compra

- Envia o carrinho para o servidor ao finalizar (POST /finalizar-compra)

#### 🔙 Back-end

- GET /produtos → Lista os produtos cadastrados no banco

- POST /carrinho → (opcional) Adiciona um produto ao carrinho

- PUT /carrinho → (opcional) Atualiza quantidade ou remove produto

- POST /finalizar-compra → Registra uma venda e seus itens no banco de dados

### 🗃️ Modelagem do Banco de Dados

Banco: PostgreSQL
```sql
CREATE DATABASE BD_ecommerce_case;

\c BD_ecommerce_case;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price NUMERIC(10,2) NOT NULL,
  image_url TEXT
);

CREATE TABLE sales (
  id SERIAL PRIMARY KEY,
  total NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sale_items (
  id SERIAL PRIMARY KEY,
  sale_id INTEGER REFERENCES sales(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  subtotal NUMERIC(10,2) NOT NULL
);

Exemplo de dados iniciais:
INSERT INTO products (name, description, price, image_url)
VALUES
('Notebook Dell', 'Notebook i5 com 8GB RAM', 3500.00, 'https://picsum.photos/200?1'),
('Mouse Gamer', 'Mouse óptico RGB', 150.00, 'https://picsum.photos/200?2'),
('Teclado Mecânico', 'Switch Blue, LED branco', 250.00, 'https://picsum.photos/200?3');
```
### 🧩 Arquitetura do Projeto
```bash
case-ecommerce/
│
├── backend/
│   ├── .env
│   ├── package.json
│   └── src/
│       ├── index.js
│       ├── config
│       │   └── db.js
│       ├── routes/
│       │   └── carrinhoRoutes.js
│       │   └── compraRoutes.js
│       │   └── produtosRoutes.js
│       ├── repositories/
│       │   └── compraRepository.js
│       │   └── produtosRepository.js
│       ├── services/
│       │   └── carrinhoService.js
│       │   └── compraService.js
│       │   └── produtosService.js
│       └── controllers/
│           └── carrinhoController.js
│           └── compraController.js
│           └── produtosController.js
│
└── frontend/
    ├── package.json
    ├── public
    │   └── index.html
    └── src/
        ├── index.js
        ├── App.jsx
        ├── components/
        │   ├── ProductCard.jsx
        │   └── Cart.jsx
        └── styles.css
```

## ⚙️ Configuração do Back-end
### 🔧 Variáveis de ambiente (.env)

Crie o arquivo .env na pasta backend/ com:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=BD_ecommerce_case
```
### ▶️ Rodar o servidor
```bash
cd backend
npm install
node src/index.js
```

#### O servidor será iniciado em:
```bash
http://localhost:3001
```
### 💻 Configuração do Front-end
```bash
cd frontend
npm install
npm start
```

#### A aplicação React será iniciada em:
```bash
http://localhost:3000
```

## 🔗 Integração Front → Back

### Listar produtos:
```bash
GET http://localhost:3001/produtos
```
### Finalizar compra:
```bash
POST http://localhost:3001/finalizar-compra
```
```json
{
  "cart": [
    { "id": 1, "name": "Notebook Dell", "quantity": 1, "price": 3500.00 }
  ]
}
```
## 🧠 Fluxo de funcionamento

- O usuário acessa o front-end em React.

- A aplicação faz um fetch na rota /produtos do back-end.

- O Node.js consulta o banco PostgreSQL e retorna os produtos.

- O usuário adiciona itens ao carrinho e clica em “Finalizar compra”.

- O front envia o carrinho para /finalizar-compra.

- O servidor registra a venda e responde com uma mensagem de sucesso.

## 🧪 Exemplo de resposta da API
### GET /produtos
```json
[
  {
    "id": 1,
    "name": "Notebook Dell",
    "description": "Notebook i5 com 8GB RAM",
    "price": "3500.00",
    "image_url": "https://picsum.photos/200?1"
  },
  {
    "id": 2,
    "name": "Mouse Gamer",
    "description": "Mouse óptico RGB",
    "price": "150.00",
    "image_url": "https://picsum.photos/200?2"
  }
]
```
### POST /finalizar-compra
```json
{
  "success": true,
  "message": "Compra finalizada com sucesso"
}
```
## 🧩 Melhorias Futuras

- Implementar autenticação de usuários (JWT)

- Criar painel administrativo para cadastrar produtos

- Adicionar testes automatizados (Jest)

- Fazer deploy com Docker e Render/Heroku

## 👩‍💻 Autora

### Jéssica Lira
#### Desenvolvedora Full Stack | Node.js • React • PostgreSQL
#### 📧 jessicaliradev@gmail.com
#### 🔗 github.com/jessicalira1001
