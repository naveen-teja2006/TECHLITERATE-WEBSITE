let db = require("../config/db");
exports.getSkillsByRole = async(role_id) => {
    let sql = `SELECT s.skill_name
    FROM Roles r JOIN Skills s ON r.id = s.role_id
    WHERE r.id = ?
    ORDER BY r.id;`;
    let data = await db.query(sql, [role_id]);
    return data;
}