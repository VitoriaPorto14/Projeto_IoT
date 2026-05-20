# Projeto_IoT

## 1. Importação de Dependências
Nesta parte, o código traz as ferramentas necessárias para funcionar.

- _**const express = require('express')**_: Importa o módulo Express, que é o framework principal para criar servidores HTTP de forma rápida.
- _**const cors = require('cors')**_: Importa o middleware CORS. Ele serve para permitir que aplicações em domínios diferentes (como um site no navegador) acessem esta API sem serem bloqueadas por segurança.
- _**const app = express()**_: Instancia (cria) a aplicação Express. A variável app será usada para configurar as rotas e o servidor.

## 2. Configurações (Middlewares)
Os middlewares são funções que processam a requisição antes de ela chegar às rotas finais.

- _**app.use(cors())**_: Ativa o CORS para que a API aceite requisições de outros locais.
- _**app.use(express.json())**_: Diz ao Express para entender quando alguém envia dados no formato JSON (muito comum em APIs). Sem isso, o servidor não conseguiria ler as informações enviadas pelo usuário.

## 3. Banco de Dados (Simulado)

- _**let historicoSensores = [...]**_: Define um array de objetos. Como não há um banco de dados real (como MySQL ou MongoDB) conectado, os dados ficam salvos na memória RAM do computador enquanto o servidor estiver rodando.

## 4. Definição de Rotas
As rotas definem o que o servidor faz quando recebe um "chamado" em um endereço específico.

### Rota GET (/api/dados)

- _**app.get(...)**_: Define um método de busca.
- _**res.json(historicoSensores)**_: Quando o usuário acessa essa URL, o servidor responde enviando toda a lista de sensores no formato JSON.

### Rota POST (/api/dados)

- _**app.post(...)**_: Define um método para enviar novos dados ao servidor.
- _**const {temperatura, umidade, hora} = req.body**_: Faz a desestruturação para pegar os valores que o usuário enviou no "corpo" da mensagem.
- _**if(!temperatura || ...)**_: Uma validação simples. Se faltar qualquer dado, o servidor retorna o erro 400 (Bad Request) com uma mensagem de aviso.
- _**historicoSensores.push(novosDados)**_: Adiciona o novo objeto ao final do nosso array (o "banco de dados" local).
- _**res.status(201).json(...)**_: Retorna o status 201 (Created), confirmando que o dado foi salvo com sucesso.

## 5. Inicialização do Servidor

- _**const PORT = process.env.PORT || 3000**_: Define em qual "porta" o servidor vai rodar. Ele tenta usar uma porta do sistema ou, por padrão, a porta 3000. (Note que há um pequeno erro de digitação na imagem: process.env.use deveria ser process.env.PORT).
- _**app.listen(PORT, ...)**_: Liga o servidor de fato. A partir deste momento, o computador passa a "ouvir" e responder às requisições que chegarem na porta definida.
- _**console.log(...)**_: Apenas exibe uma mensagem no terminal do programador para avisar que tudo deu certo e o servidor está online.
