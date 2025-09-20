// --------------------
// server.js
// --------------------
const http = require('http');

const server = http.createServer((req, res) => {
  // Définir le type de contenu comme HTML
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // Page HTML envoyée comme réponse
  res.end(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Message pour Bassma ❤️</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          font-family: 'Arial', sans-serif;
          margin: 0;
        }
        .message {
          background: white;
          padding: 30px 50px;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          text-align: center;
          font-size: 1.5rem;
          color: #e63946;
        }
      </style>
    </head>
    <body>
      <div class="message">
        🌹 Pour ma belle Bassma : Tu es mon sourire, ma force et mon bonheur ❤️
      </div>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

server.listen(port, host, () => {
  console.log(`🚀 Serveur démarré sur http://${host}:${port}`);
});
