## Iniciar projeto node

npm init -y

## Instalar typescript em ambiente de Dev

npm install typescript --save-dev

## Configuração do typescript

tsc --init

#Instalação do Fastify

npm install fastify @fastify/cors

#Instalação do tsx (biblioteca para rodar o ts com live reload)

npm install tsx

#Instalação das tipagens do node

npm install @types/node --save-dev

#Config dos arquivos de conecxão com o Mongo

> src	
  > server.ts 
  > routes.ts

> package.json

"scripts": {
    "dev": "tsx watch src/server.ts"
  }

#Para rodar

npm run dev

#Setup prisma

npm install prisma --save-dev

npm install @prisma/client

npx prisma init

#Setup Mongo DB

> .env (inserir linha de conecxão)

#Visualizar schema do prisma 

npx prisma generate
