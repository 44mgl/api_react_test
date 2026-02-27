# 🚀 CRUD - Node.js + React + Prisma + MongoDB

Este projeto é uma aplicação Full Stack desenvolvida para praticar a criação de APIs REST e integração com banco de dados utilizando tecnologias modernas do ecossistema JavaScript.

A aplicação permite:

- ✅ Criar usuários
- ✅ Listar usuários
- ✅ Editar usuários
- ✅ Deletar usuários

O backend foi desenvolvido com Node.js e Express, utilizando Prisma ORM para conexão com MongoDB.  
O frontend foi desenvolvido com React utilizando Vite.

---

# 🛠 Tecnologias Utilizadas

## Backend
- Node.js
- Express
- Prisma ORM
- MongoDB
- JavaScript

## Frontend
- React
- Vite
- Axios

---

---

# ⚙️ Instalação do Projeto

##  Instalação - Backend
##  1. Clonar o repositório

git clone https://github.com/44mgl/api_react_test.git

##  Instale as dependências:

npm install

Dependências utilizadas:

npm install express,
npm install cors,
npm install prisma@5,
npm install @prisma/client@5,

#  Gerar o arquivo prisma

Gerar o Prisma Client:

npx prisma generate

#  Configure o arquivo .env:

DATABASE_URL="sua_string_de_conexao_mongodb"

# Inicie o servidor:

node server.js

# Backend rodando em:

http://localhost:8000

---

## 💻 Instalação - Frontend
## 2. Rodar o Frontend

Abra outro terminal.

# Entre na pasta do frontend:

cd react_test/react_cadastro

# Instale as dependências:

npm install
npm install axios

# Inicie o React:

npm run dev

# Frontend rodando em:

http://localhost:5173

# 📡 Endpoints da API
- Criar usuário
POST /users
- Listar usuários
GET /users
- Deletar usuários
DELETE /users
- Editar usuários
PUT /users
