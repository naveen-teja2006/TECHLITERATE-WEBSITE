let registerController = require("../controllers/registerController.js");
let express = require("express");
let router  = express.Router();
router.post("/",registerController.insertUsers);
module.exports = router;