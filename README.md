

<h1 align="center">
  Desafio 06: Banco de dados e upload de arquivos no Node.js
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Jumori/gostack-desafio-06-databaseupload?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Jumori/gostack-desafio-06-databaseupload">

  <a href="https://github.com/Jumori/gostack-desafio-06-databaseupload/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jumori/gostack-desafio-06-databaseupload">
  </a>

</p>

<h4 align="center">
	Concluído 🚀
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#️-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando a aplicação](#-rodando-o-backend-servidor)
   * [Tecnologias](#-tecnologias)
   * [Autora](#-autora)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

Projeto desenvolvido durante o **GoStack Bootcamp** oferecido pela [Rocketseat](https://nextlevelweek.com/). Este desafio é uma continuação dos estudos realizados no [Desafio 05: Primeiro projeto Node.js](https://github.com/Jumori/gostack-05-primeiro-projeto-react).

A proposta deste desafio é criar uma aplicação para armazenar transações financeiras de entrada e saída, permitindo a criação de uma transação e a listagem das mesmas. O desenvolvimento desta aplicação coloca em prática os conhecimentos adquiridos em Node.js e TypeScript.

Repositório com as intruções do desafio [Desafio 06: Banco de dados e upload de arquivos no Node.js](https://github.com/rocketseat-education/bootcamp-gostack-desafios/tree/master/desafio-database-upload)


## ⚙️ Funcionalidades

- [x] Criar uma nova transação
- [x] Listar todas as transações registradas junto com o valor da soma de entradas, retiradas e o total de crédito disponível
- [x] Registrar novas transações a partir da importação de um arquivo CSV

## 🚀 Como executar o projeto


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:Jumori/gostack-desafio-06-databaseupload.git

# Acesse a pasta do projeto no terminal/cmd
$ cd gostack-desafio-06-databaseupload


# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```
<p align="center">
  <a href="https://github.com/Jumori/gostack-desafio-06-databaseupload/Insomnia_gostack_desafio_06" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/pt-br/)**
-   **[CSV Parse](https://csv.js.org/parse/)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[TypeORM](https://typeorm.io/#/)**

> Veja o arquivo  [package.json](https://github.com/Jumori/gostack-desafio-06-databaseupload/blob/master/package.json)


## 🦸 Autora

<a href="https://github.com/Jumori">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/44618499?s=460&u=691cddb486d4b665417d25d8a575e508d6ef9563&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Juliana Morikoshi</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Juliana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/julianamorikoshi/)](https://www.linkedin.com/in/julianamorikoshi/)
[![Gmail Badge](https://img.shields.io/badge/-julianamorikoshi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:julianamorikoshi@gmail.com)](mailto:julianamorikoshi@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Juliana Morikoshi 👋 [Entre em contato!](https://www.linkedin.com/in/julianamorikoshi/)
