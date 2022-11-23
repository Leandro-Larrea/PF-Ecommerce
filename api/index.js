const server = require('./src/app.js');
const db = require("./src/db.js");

db();
server.listen(3001)
console.log("listening the best server in the world")

