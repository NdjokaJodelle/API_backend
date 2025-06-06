const http = require('http');
const app = require('./app');

// Définir le port
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

// Créer et démarrer le serveur
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
