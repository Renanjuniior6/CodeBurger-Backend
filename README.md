<h3>Repositório Back end do projeto Code Burger</h3>

Rodando através do Nodejs e Express com auxilio dos bancos relacionais PostgreSQL e não Relacionais MongoDB hospedaos em container no Docker.
Feito com o modelo MVC contendo controllers de usuários, produtos, categorias e pedidos gerenciando os dados que entram e armazenando nos bancos de dados.

No PostgreSQL é armazenado os usuários logados, produtos e categorias, no Mongo são armazenados somente os pedidos. Através das controllers e models eles são armazenados e atualizados
automaticamente neles. 

<h4>O repositório possui rotas para cada requisição:</h3>
-Rota de fazer pedido
<br>
-Criar um produto
<br>
-Criar categoria
<br>
-Logar o usuário
<br>
-Cadastrar um usuário
<br>
-Visualizar produtos
<br>
-Visualizar categorias
<br>
-Atualizar produto
<br>
-Atualizar categoria
<br>
-Atualizar status do pedido
<br>
<br>

⭕ Foram usados frameworks NoSQL para o a criação dos models e controllers como sequelize e o mongoose

🗂 Pastas foram criadas para organizar cada arquivo e funções da aplicação como a pasta de "config", "database"...

📊 Em 'app' estão os controllers, models e schemas da aplicação

📊 Em 'middlewares' está o arquivo de interceptor das rotas com a verificação do JWT

📊 Em 'config' estão o arquivos de configuração do multer, banco de dados e autenticação do JWT

📊 Em 'database' estão as migrations e conexão dos models com os bancos

📊 Em 'uploads' estão os uploads das fotos da aplicação feito através do multer

<h3>💻 Neste projeto foram utilizadas as seguintes ferramentas:</h3>
<b>-JavaScript</b>
<br>
<b>-Node.js</b>
<br>
<b>-PostegreSQL</b>
<br>
<b>-MongoDB</b>
<br>
<b>-Sequelize-cli</b>
<br>
<b>-Sucrase</b>
<br>
<b>-Bcrypt</b>
<br>
<b>-Cors</b>
<br>
<b>-Express</b>
<br>
<b>-JsonWebToken</b>
<br>
<b>-Mongoose</b>
<br>
<b>-Multer</b>
<br>
<b>-Sequelize</b>
<br>
<b>-Yup</b>
<br>
<b>-Eslint</b>
<br>
<b>-Prettier</b>
<br>
<br>
<b>⭕ Para rodar em outras máquinas é necessário rodar o comando 'Yarn dev' e ter o Yarn instalado na máquina</b>


 
