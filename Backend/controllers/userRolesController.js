let userRolesModel = require("../models/userRolesModel");
// Save Roles for a user based on user_id and roleIds
exports.saveRoles = async (req, res) => {
    try {
        let { roleIds } = req.body;
        const user_id = req.user.userId; // localStorage.getItem("userId")
        let results = await userRolesModel.saveRoles(user_id, roleIds);
        res.status(201).json({ 
            message: "Roles Saved Successfully",
            data:results
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}
// Get user roles based on user_id
exports.getUserRoles = async (req, res) => {
    try{
        const user_id = req.user.userId; // localStorage.getItem("userId")
        let results = await userRolesModel.getUserRoles(user_id);
        res.status(200).json({ 
            message: "User Roles Fetched Successfully",
            data:results
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}