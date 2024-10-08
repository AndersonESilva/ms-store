const express = require('express');
const bodyParser = require('body-parser');

const container = require('../../infrastructure/di/container');
const route = container.resolve('route');
const database = container.resolve('database');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', route.productRoutes);

database.sequelize.authenticate()
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

