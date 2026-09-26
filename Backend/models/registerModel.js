let db = require("../config/db.js");
const bcrypt = require("bcrypt");
exports.insertUsers = async(username,email,password) =>{
    let hashedPassword = await bcrypt.hash(password,10);
    let sql = "INSERT INTO Users(username,email,password) VALUES(?,?,?)";
    await db.promise().query(sql,[username,email,hashedPassword]);
}