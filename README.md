### Catálogo de Filmes API

Este projeto é uma implementação de uma API RestFul em JSON para um catálogo de filmes, utilizando Node.js com Nest.js, TypeScript, TypeORM, Redis e PostgreSQL. A API inclui autenticação JWT para garantir que apenas usuários autenticados possam acessar os endpoints de CRUD dos filmes.

### Tecnologias Utilizadas

- **Node.js e TypeScript**: Amplamente utilizados para o desenvolvimento backend moderno.
- **Nest.js**: Framework Node.js para construir aplicativos eficientes e escaláveis.
- **TypeORM**: ORM (Object-Relational Mapping) para TypeScript e JavaScript.
- **Redis**: Banco de dados em memória usado para caching.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Swagger**: Para documentação automática da API.
- **Docker**: Para conteinerização e facilitar o ambiente de desenvolvimento e produção.


### Funcionalidades

- **Autenticação JWT**: Usuários devem autenticar-se para acessar os endpoints de CRUD de filmes.
- **CRUD de Filmes**: Endpoint para criar, listar, buscar, atualizar e deletar filmes.
- **Validação de Dados**: Validação de entrada em todos os endpoints para garantir integridade dos dados.
- **Documentação Swagger**: API documentada automaticamente para facilitar o uso e entendimento.

### Implementação e Deploy

Este projeto foi implementado seguindo as melhores práticas de engenharia de software e engenharia de qualidade, utilizando ferramentas apropriadas para cada tarefa. A implementação inclui testes automatizados para garantir a estabilidade e funcionalidade do sistema.

### Crie sua imagem docker
- ** docker build -t nome_da_sua_imagem -f Dockerfile.yaml . --no-cache

### Inicie seu container ! lembre de ter instanciado o postgres e o redis
- ** docker run -d -p 3000:3000 --name catalog_movie -e POSTGRES_USER="admin" -e POSTGRES_HOST="postgres" -e POSTGRES_PASSWORD="admin" -e POSTGRES_DATABASE="movies" -e POSTGRES_PORT="5432" -e REDIS_HOST="redis" -e REDIS_PORT="6379" -e REDIS_DB="0" --network catalog_movie-main_catalog_movie-network $nome_da_sua_imagem:latest sh -c "npm run migration:run && npm run start:prod"

### Inicie a partir do meu repositório docker
- ** docker run -d -p 3000:3000 --name catalog_movie -e POSTGRES_USER="admin" -e POSTGRES_HOST="postgres" -e POSTGRES_PASSWORD="admin" -e POSTGRES_DATABASE="movies" -e POSTGRES_PORT="5432" -e REDIS_HOST="redis" -e REDIS_PORT="6379" -e REDIS_DB="0" --network catalog_movie-main_catalog_movie-network herickdevelop/catalog_movie:latest sh -c "npm run migration:run && npm run start:prod"

### Inicie Rapidamente com todas as dependencias utilizando docker-composer
- ** docker compose -f docker-composer.yaml up -d
