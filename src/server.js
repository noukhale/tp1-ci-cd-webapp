const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques (HTML/CSS)
app.use(express.static(path.join(__dirname, '../public')));

// Route API simple
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from Node.js WebApp 🚀" });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
