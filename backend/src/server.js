const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config.env') });
const http = require('http');
const app = require('./app.js');
const mongoose = require('mongoose');

const server = http.createServer(app);

mongoose
  .connect(process.env.LOCAL_DATABASE)
  .then(console.log('successful DB connection'))
  .catch((err) => {
    console.log(err.message);
  });

const PORT = process.env.PORT || 5050;
server.listen(PORT, () => {
  console.log(`Running on port ${PORT} 🎠`);
});
