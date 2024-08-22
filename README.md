## Connecter Life - WebSocket

O Connecter Life utiliza WebSocket para fornecer comunicação em tempo real entre os usuários dentro das comunidades (chats). Isso permite que as mensagens sejam enviadas e recebidas instantaneamente, proporcionando uma experiência de chat fluida e interativa.

## Funcionalidades do WebSocket
  - Mensagens em Tempo Real: Envio e recepção de mensagens instantâneas nos chats das comunidades.
  - Gerenciamento de Salas de Chat: Cada comunidade é uma sala de chat independente, garantindo que as mensagens sejam enviadas apenas para os membros da comunidade correta.
  
## Tecnologias Utilizadas
  - Node.js: Plataforma JavaScript para execução do código backend.
  - WebSocket (ws): Biblioteca WebSocket para Node.js.
  - Express.js: Integrado para gerenciamento de rotas e inicialização do servidor.
  - MongoDB: Armazenamento de mensagens de chat e histórico.
  
## Como Executar o WebSocket Server

** Pré-requisitos
  - Node.js e npm instalados

** Passos para executar
   - Clone o repositório do WebSocket: git clone https://github.com/seu-usuario/websocket-deploy.git
   - cd connecter-life-websocket

## Instale as dependências:
  - npm install

## Inicie o servidor WebSocket:
  - npm start
  
O servidor WebSocket estará rodando em ws://localhost:3002
