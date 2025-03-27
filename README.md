# Consumindo uma API com React
O que é esse projeto?
Este é um aplicativo simples feito em React. Ele busca informações de personagens do desenho Rick and Morty da internet usando uma "máquina de dados" chamada API.
Depois, mostra o nome e a imagem de um personagem na tela.

# Como funciona?
O que é uma API?
API é como uma máquina mágica que nos dá informações quando pedimos, como nomes e imagens de personagens de desenhos! 😄

# O que acontece no código?

# useState([])
Guarda informações em uma "caixinha mágica" chamada desenho.

# useEffect()
Pede para o React buscar os dados assim que a página abre.

# axios.get()
Vai na internet buscar as informações da API.

# setDesenho(Dados.data[0])
Coloca o primeiro personagem da lista dentro da "caixinha mágica".

## O que aparece na tela?
Um título: "API".
Uma explicação: "Application Programming Interface / Interface de Programação de Aplicações".
A foto e o nome de um personagem do desenho Rick and Morty.

# Como usar este projeto?
1. Instalar o React e o Axios
Primeiro, você precisa ter o React configurado no seu computador. Se ainda não tem, siga estes passos:

# Instale o Node.js no seu computador.
Abra o terminal e crie um projeto React com o comando:
npx create-react-app meu-app

Entre na pasta do projeto:
cd meu-app

# Instale o Axios com este comando:
npm install 
npm install axios
npm install sass

2.Coloque o código
Substitua o conteúdo do arquivo App.js pelo código do projeto disponivel no index.jsx

3. Rodar o projeto
No terminal(gitbash), rode este comando para iniciar o projeto:
npm run dev
O navegador vai abrir e mostrar o aplicativo.
