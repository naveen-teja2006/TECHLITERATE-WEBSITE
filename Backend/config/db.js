// Main Database Connection File 
const dotenv = require("dotenv");
dotenv.config();
let mysql2 = require("mysql2");
let db = mysql2.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
db.connect((err) => {
    if (err) {
        return console.log("Error Connecting In Database : ",err.message);
    }
    else {
        console.log("Database Connnected Successfully...");
    }
})
module.exports = db;