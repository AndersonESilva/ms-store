const express = require('express');
const productRoutes = require('../routes/productRoutes');
const bodyParser = require('body-parser');
const initializeDb = require('../../infrastructure/database');

const app = express();
const port = 3000;

const dbConfig = require('../../../config/database');
// const env = process.env.NODE_ENV || 'development';
const env = 'development';

const dbConfigx = dbConfig[env];

const config = Object.assign({
  env: env,
  db: dbConfigx
});

const db = initializeDb({ config });

app.use(bodyParser.json());

app.use('/api', productRoutes(db));

db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
    process.exit(1); 
  });

