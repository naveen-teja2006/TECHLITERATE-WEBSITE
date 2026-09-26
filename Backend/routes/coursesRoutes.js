let express = require("express");
let router = express.Router();
let coursesController = require("../controllers/coursesController");
router.get("/", coursesController.getAllCourses);
module.exports = router;