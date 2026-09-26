let rolesController = require("../controllers/rolesController");
let express = require("express");
let router = express.Router();
router.get("/",rolesController.getRoles);
module.exports = router;