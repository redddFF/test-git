// main.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Charge les variables d'environnement depuis un fichier .env

const app = express();
const port = process.env.PORT || 3000;



// Middlewares
app.use(bodyParser.json());

// Connexion à la base de données MongoDB
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de données MongoDB connectée avec succès');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB :', error);
    process.exit(1);
  }
};

// Définition d'une route de test
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre API Node.js !');
});

// Lancement du serveur
const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });
};

startServer();
