const http = require('http');

const server = http.createServer((req, res) => {
  // Définir le type de contenu comme texte simple
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  
  // Message pour Bassma
  res.end('🌹 Pour ma belle Bassma : Tu es mon sourire et mon bonheur ❤️');
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

server.listen(port, host, () => {
  console.log(`🚀 Serveur démarré sur http://${host}:${port}`);
});
