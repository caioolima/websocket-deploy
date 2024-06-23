const WebSocket = require("ws");
const PORT = process.env.PORT || 3002;
const wss = new WebSocket.Server({ port: PORT });

const clients = new Set();

// Adicione um condicional para responder aos pings
wss.on("connection", function connection(ws) {
  clients.add(ws);

  ws.on("message", function message(data) {
    if (data === "ping") {
      // Se receber um ping, responda com um pong
      ws.send("pong");
    } else {
      broadcastMessage(data);
    }
  });

  ws.on("close", function () {
    clients.delete(ws);
  });
});

wss.on("listening", function () {
  console.log(`WebSocket server is running and listening on port ${PORT}`);
});

function broadcastMessage(message) {
  clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}
