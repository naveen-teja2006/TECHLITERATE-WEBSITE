const db = require("../config/db");
exports.getAllCourses = async () => {
    const sql = "SELECT * FROM Courses";
    let [rows] = await db.promise().query(sql);
    return rows;
}