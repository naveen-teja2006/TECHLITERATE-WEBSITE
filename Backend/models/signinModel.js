let db = require("../config/db.js");
exports.getAllUsers = async (email) => {
    let sql = "SELECT id,username,email,password FROM Users WHERE email = ?";
    let [rows] = await db.promise().query(sql, [email]);
    return rows;
};