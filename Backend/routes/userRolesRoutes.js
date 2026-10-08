let userRolesController = require("../controllers/userRolesController");
let authenticateToken = require("../middleware/authMiddleWare");
let express = require("express");
let router = express.Router();
router.post("/",authenticateToken,userRolesController.saveRoles);
router.get("/",authenticateToken,userRolesController.getUserRoles);
module.exports = router;