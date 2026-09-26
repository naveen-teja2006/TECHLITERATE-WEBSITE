let db = require("../config/db.js");
exports.saveRoles = (roleId) =>{
    let sql = "INSERT INTO SelectedRoles(roleIds) VALUES(?)";
    let [result] = db.promise().query(sql,[roleIds]);
    return result;
}