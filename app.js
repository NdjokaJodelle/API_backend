

/*// Log de requêtes (facultatif)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});*/

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const contactRoutes = require('./routes/contactRoutes');

const app = express();   

// Middleware
app.use(cors());
app.use(express.json());

// Documentation Swagger (à mettre après `app` avoir été défini)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/contacts', contactRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion MongoDB :', err));

module.exports = app;
