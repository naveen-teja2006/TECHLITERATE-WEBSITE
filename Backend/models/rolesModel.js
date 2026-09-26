let db = require("../config/db.js");
exports.getRoles = async() =>{
    let sql = "SELECT * FROM Roles";
    let [rows] = await db.promise().query(sql);
    return rows;
}