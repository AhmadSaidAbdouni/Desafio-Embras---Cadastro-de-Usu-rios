<h1 align="center">Desafio Embras - Cadastro de Usuários</h1>

![Desafio Ahmad](https://github.com/AhmadSaidAbdouni/Desafio-Embras-Cadastro-de-Usuarios/assets/75034691/1f7092f9-27ac-4571-a5e5-758c884142be)

## :memo: Sumário
<!--ts-->
   * [Descrição do Projeto](#dart-Descrição-do-Projeto)
   * [Funcionalidades do Projeto](#white_check_mark-Funcionalidades-do-Projeto)
   * [Demonstração da Aplicação](#sparkles-Demonstração-da-Aplicação)
   * [Tecnologias Utilizadas](#hammer-Tecnologias-Utilizadas)
   * [Acesso ao Projeto (Como Usar)](#warning-Acesso-ao-Projeto-como-usar)
      * [Comandos Docker](#Comandos-Docker)
      * [Configuração do Ambiente Angular](#Configuração-do-Ambiente-Angular)
   * [Pessoas Desenvolvedoras do Projeto](#raising_hand-Pessoas-Desenvolvedoras-do-Projeto)
<!--te-->

## :dart: Descrição do Projeto

Projeto elaborado em Angular/Ruby com o objetivo de participar de um processo seletivo interno na EMBRAS.

`Requisitos do projeto estabelcidos pela empresa`:
- Criar um pequeno sistema com base em um layout estabelecido pela equipe de UX/UI.

- Utilizar Angular para desenvolver o frontend.

- Utilizar PHP ou Ruby para desenvolver o backend.
  
- Deve ser utilizado o PrimeNG como biblioteca de componentes.

## :white_check_mark: Funcionalidades do Projeto

- `Funcionalidade 1`: Botão para adicionar um usuário com campos de preenchimento obrigatório para nome e e-mail, seguidos de botões para confirmar ou cancelar essa ação.
- `Funcionalidade 2`: Opção de excluir um usuário.


## :sparkles: Demonstração da Aplicação

Acesse o vídeo com a demonstração da aplicação no link a seguir: https://youtu.be/nNQc4xmbDqA?si=IisyugudiRZ7vpc7

## :hammer: Tecnologias Utilizadas

- `Angular V18.0.1`
- `Node.JS V20.9.0`
- `Ruby on Rails V3.3.1`
- `PostgreSQL 13`
- `Paradigma de orientação a objetos`


## :warning: Acesso ao Projeto (Como Usar)

Acessar o projeto em um navegador utilizando a porta: <b>localhost:4200</b>

<h3 align="center">Comandos Docker</h3> 

Para facilitar o uso e a acessibilidade do projeto, todas as dependências e pré-requisitos foram configurados utilizando o Docker. Siga os passos abaixo no terminal do projeto para configurar e iniciar o ambiente Docker do projeto.

- `docker compose --build`
- `docker compose up`
- `docker compose exec backend bundle exec rails db:create`
- `docker compose exec backend bundle exec rails db:migrate`

##

<h4>O Que Cada Comando Faz?</h4>

- `docker compose --build`: Este comando cria (ou recria) as imagens Docker baseadas no arquivo docker-compose.yml. Ele garante que todas as dependências e configurações especificadas no Dockerfile e no arquivo de composição sejam aplicadas corretamente.

- `docker compose up:` Este comando inicializa e executa os contêineres definidos no arquivo docker-compose.yml. Ele garante que o projeto esteja rodando no ambiente Docker configurado, conectando todos os serviços necessários.

##
### <b>`ATENÇÃO: As configurações abaixo são apenas explicativas, priorizar a utilização do Docker.`</b>
##

<h3 align="center">Configuração do Ambiente Angular</h3> 

Para configurar e manipular projetos Angular, siga os passos abaixo. Primeiro, <b>instale o Node.js na sua máquina</b>. A versão utilizada neste projeto é Node.js 20.9.0. Você pode baixá-lo no site: https://nodejs.org/en.

Após a intalação do Node.JS, realize esse Passo-a-Passo:

<b>1 -</b> Em sua máquina, abra o Terminal do computador como Administrador.

<b>2 -</b> Rode os comandos abaixo separadamente:

- npm install -g npm@latest
- npm install -g @angular/cli@latest
- npm install -g @npmcli/package-json
- npm install primeng

##

<h4>O Que Cada Comando Faz?</h4>

- Atualizar NPM: `npm install -g npm@latest`

Este comando instala a versão mais recente do NPM (Node Package Manager), essencial para gerenciar pacotes Node.js.

- Instalar Angular CLI: `npm install -g @angular/cli@latest`

Este comando instala a versão mais recente do Angular CLI, uma ferramenta necessária para criar e gerenciar projetos Angular.

- Instalar Pacote JSON do NPM: `npm install -g @npmcli/package-json`

Este comando instala o pacote package-json, útil para gerenciar dependências.

- Instalar PrimeNG: `npm install primeng`

Este comando instala o PrimeNG, uma biblioteca de componentes UI usada no projeto.

## :raising_hand: Pessoas Desenvolvedoras do Projeto

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/75034691?v=4" width=115><br><sub>Ahmad Said Abdouni</sub>](https://github.com/AhmadSaidAbdouni) |
| :---: |
