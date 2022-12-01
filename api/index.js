const server = require('./src/app.js');
const db = require("./src/db.js");
require('dotenv').config();
const port = process.env.PORT || 3001;

db()
server.listen(port)
console.log("listening the best server in the world, 3001") 
