const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);

const PORT = process.env.PORT || 5050;
server.listen(PORT, () => {
  console.log(`Running on port ${PORT} 🎠`);
});
