let rolesModel = require("../models/rolesModel.js");
exports.getRoles = async (req, res) => {
    try {
        let results = await rolesModel.getRoles();
        return res.status(200).json({ data: results });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}