let coursesModel = require("../models/coursesModel");
// Exporting the getAllCourses function to be used in the routes
exports.getAllCourses = async (req, res) => {
    try {
        const results = await coursesModel.getAllCourses();
        res.status(200).json({ message: "Success", data: results });
    } catch (error) {
        res.status(500).json({ error: "Error retrieving courses" });
    }
};