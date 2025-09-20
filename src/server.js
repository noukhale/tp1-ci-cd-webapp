// --------------------
// server.js
// --------------------
const express = require("express");
const app = express();
const PORT = 3000;

// Route principale "/"
app.get("/", (req, res) => {
  res.send(`
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

// Lancer le serveur
app.listen(PORT, () => {
  console.log(\`🚀 Serveur démarré sur http://localhost:\${PORT}\`);
});
