<p align="center">
 <a href="#Description">Descrição</a> •
 <a href="#Features">características</a> • 
 <a href="#Technologies">Tecnologias</a> •
 <a href="#How to use">Como usar</a> •
 <a href="#Software">Software</a> 
</p>

 # API -  Login

#### Response Format:
```bash
JSON
```
#### Database:
```bash
SQLite
```

## Methods:

#### Users
```bash
POST - EndPoint/users - Cria uma conta no banco, é necessário enviar: {name: string, email: string, password: string}
```
```bash
GET - EndPoint/users - Apenas para "pingar" o servidor e vê se ele está já está funcionando, retorna {"conectado"}
```

#### Session
```bash
POST - EndPoint/sessions - Faz verificação no banco e caso esteja registrado recebe um token de verificação para acessar a aplicação. Necessário enviar {email: string, password: string}
```

<div id="Description">

## Descrição

API desenvolvida para o desafio da Hubbi que consiste em uma aplicação com informações dos filmes de star wars, mas para vê-las detalhadamente é necessário estar logado.

</div> 

<div id="Characteristics">

## Caracteristicas:
- NodeJS;
- Database Manipulation;
- HTTP (Routes and Methods);
- Routes & request params;


</div>
<div id="Technologies">

## Tecnologias:

- Languages: `javascript`
- Libraries: `node` `express` `express-async-errors` `pm2` `sqlite` `sqlite3` `path` `cors`
- Version control: `Git & Github`

</div>
<div id="How to use">

## Como usar localmente:

#### Clone esse repositório

```bash
$ git clone https://github.com/Jcassio-dev/SimpleLoginApi.git
```

#### Acesse a pasta do projeto no terminal/cmd

```bash
$ cd /SimpleLoginApi
```

#### Instale as dependências

```bash
$ npm install
```

#### Execute a aplicação no modo de desenvolvimento

```bash
$ npm run dev
```
#### O server será iniciado - Vá até a porta informada
```bash
localhost:port
```
</div>
<div id="Software">

## Software

VSCode
</div>
