let db = require("../config/db.js");
exports.saveRoles = async(user_id,roleIds) =>{
    let values = roleIds.map((role_id) => [user_id,role_id]);
    let sql = `INSERT INTO SelectedRoles(user_id,role_id) VALUES ? `;
    let [result] = await db.promise().query(sql,[values]);
    return result;
}

exports.getUserRoles = async(user_id) =>{
    let sql = `
    SELECT r.id,r.role_name,r.description,r.image_url,sr.selected_at
    FROM SelectedRoles sr
    JOIN Roles r ON sr.role_id = r.id
    WHERE sr.user_id = ?
    ORDER BY sr.selected_at ASC
    `
    let [result] = await db.promise().query(sql,[user_id]);
    return result;
}