# 🍔 Code Burger | API

### API do projeto Codeburger criado na estrutura MVC com integração dos bancos de dados PostgreSQL e MongoDB

- Rodando através do <b>Node</b> e <b>Express</b> com auxilio dos bancos relacionais <b>PostgreSQL</b> e não relacionais (NoSQL) <b>MongoDB</b> hospedaos em container no <b>Docker</b>.
Feito com o modelo <b>MVC</b> contendo controllers de usuários, produtos, categorias e pedidos gerenciando os dados que entram e armazenando nos bancos de dados.

- No <b>PostgreSQL</b> é armazenado os usuários logados, produtos e categorias, no <b>Mongo</b> são armazenados somente os pedidos. Através das controllers e models eles são armazenados e atualizados
automaticamente neles.

## 🔧 Funcionalidades 
- Comunicação com o front end, enviando os dados armazenados
- Autenticação de usuário com email, senha, admin e token
- Tratamento de dados
- Upload de fotos
- Comunicação com o banco de dados (PostgreSQL, MongoDB)
- Rotas privadas
- Rota de criação de usuário
- Rota de Login
- Rota de criação da categoria
- Rota de "get" da categoria
- Rota de "update" de categoria
- Rota de "delete" de categoria
- Rota de criação do pedido
- Rota de criação de produto
- Rota de "get" do produto
- Rota de "update" de produto
- Rota de "delete" do produto
- Rota de "get" do produto
- Rota de "get" do pedido
- Rota de "update" de status do pedido
- Rota de "delete" do pedido

## ✅Tecnologias Utilizadas
- [X] Javascript
- [X] Node
- [X] Express
- [X] Sequelize
- [X] Sequelize-cli
- [X] Mongoose
- [X] Sucrase
- [X] PostgreSQL
- [X] MongoDB
- [X] Cors
- [X] Bcrypt
- [X] JsonWebToken
- [X] Multer
- [X] Yup
- [X] Yarn
- [X] Eslint
- [X] Prettier

## ❗ Observações 
- 🗂 Foram usados frameworks de ORM's para a criação de uma camada entre a aplicação e o banco de dados. Como o Sequelize e o Mongoose
- 🗂 Em "app" estão os controllers, models e schemas da aplicação
- 🗂 Pastas foram criadas para organizar cada arquivo e funções da aplicação como a pasta de "config", "database"...
- 🗂 Em "middlewares" está o arquivo de interceptor das rotas com a verificação do JWT
- 🗂 Em "database" estão as migrations e conexão dos models com os bancos
- 🗂 Em "uploads" estão os uploads das fotos da aplicação feito através do multer

## 💻 Como rodar
```bash
# Clone este respositório
$ git clone [URL]

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn dev

# A aplicação será iniciada na porta 3001, acesse a rota base pelo navegador: http://localhost:3001
``` 
