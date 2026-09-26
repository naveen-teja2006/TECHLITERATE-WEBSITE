let signInController = require("../controllers/signinController.js");
let express = require("express");
let router = express.Router();
router.post("/", signInController.getAllUsers); 
// This route is for signing in users
module.exports = router;