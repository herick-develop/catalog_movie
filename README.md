# Catálogo de Filmes API

Este projeto é uma implementação de uma API RestFul em JSON para um catálogo de filmes, utilizando Node.js com Nest.js, TypeScript, TypeORM, Redis e PostgreSQL. A API inclui autenticação JWT para garantir que apenas usuários autenticados possam acessar os endpoints de CRUD dos filmes.

## Tecnologias Utilizadas

- **Node.js e TypeScript**: Amplamente utilizados para o desenvolvimento backend moderno.
- **Nest.js**: Framework Node.js para construir aplicativos eficientes e escaláveis.
- **TypeORM**: ORM (Object-Relational Mapping) para TypeScript e JavaScript.
- **Redis**: Banco de dados em memória usado para caching.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Swagger**: Para documentação automática da API.
- **Docker**: Para conteinerização e facilitar o ambiente de desenvolvimento e produção.

## Funcionalidades

- **Autenticação JWT**: Usuários devem autenticar-se para acessar os endpoints de CRUD de filmes.
- **CRUD de Filmes**: Endpoint para criar, listar, buscar, atualizar e deletar filmes.
- **Validação de Dados**: Validação de entrada em todos os endpoints para garantir integridade dos dados.
- **Documentação Swagger**: API documentada automaticamente para facilitar o uso e entendimento.

## Iniciando com Docker

### 1. Crie sua imagem Docker

```sh
docker build -t nome_da_sua_imagem -f Dockerfile.yaml . --no-cache sh
```

### 2. Inicie seu Container

```sh
docker run -d -p 3000:3000 --name catalog_movie \
  -e POSTGRES_USER="admin" \
  -e POSTGRES_HOST="postgres" \
  -e POSTGRES_PASSWORD="admin" \
  -e POSTGRES_DATABASE="movies" \
  -e POSTGRES_PORT="5432" \
  -e REDIS_HOST="redis" \
  -e REDIS_PORT="6379" \
  -e REDIS_DB="0" \
  --network catalog_movie-main_catalog_movie-network \
  nome_da_sua_imagem:latest \
  sh -c "npm run migration:run && npm run start:prod"
```

### Inicie a partir do meu repositório Docker

```sh
docker run -d -p 3000:3000 --name catalog_movie \
  -e POSTGRES_USER="admin" \
  -e POSTGRES_HOST="postgres" \
  -e POSTGRES_PASSWORD="admin" \
  -e POSTGRES_DATABASE="movies" \
  -e POSTGRES_PORT="5432" \
  -e REDIS_HOST="redis" \
  -e REDIS_PORT="6379" \
  -e REDIS_DB="0" \
  --network catalog_movie-network \
  herickdevelop/catalog_movie:latest sh -c "npm run migration:run && npm run start:prod"
```

### Inicie rapidamente com todas as dependências utilizando Docker Compose

```sh
docker compose -f docker-compose.yaml up -d
```
