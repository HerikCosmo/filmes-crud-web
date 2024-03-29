# CRUD Filmes

Aplicação fullstack focada em fazer um gerenciamento básico de filmes.

## Funcionalidades

- Listar filmes;
- Realizar cadastro de filme;
- Visualizar informações de um filme;
- Atualizar informações do filme;
- Apagar filme.

## Diagrama de Classes

![diagrama](./diagrama_classes.drawio.png)

## Requisitos funcionais

| Requisito | Título | Descrição |
| --- | --- | --- |
| [RF001] | Gerenciar Filmes | O usuário poderá fazer o cadastro, a atualização e a remoção de um filme

## Tecnologias

- Vue3;
- Vuetify;
- VueRouter;
- Axios;
- Spring Boot;
- PostgreSQL.

## Arquitetura

![arquitetura](./diagrama_arquitetura.drawio.jpg)

## Rotas da API

| Método HTTP | URL          |
| ----------- | ------------ |
| GET         | /movies      |
| POST        | /movies      |
| GET         | /movies/{id} |
| UPDATE      | /movies/{id} |
| DELETE      | /movies/{id} |

## Links

[Link para repositório backend](https://github.com/HerikCosmo/filmes-api-crud)

[Link para documentação](https://github.com/HerikCosmo/fimes-crud-web/blob/main/documents/documentacao_crud_filmes.pdf)



