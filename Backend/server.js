let db = require("./config/db");
let express = require("express");
let app = express(); // Express Server 
let cors = require("cors"); // This Is For Cross-Origin Platforms 
app.use(cors());
// Routes
let RegisterRoutes = require("./routes/registerRoutes");
let signInRoutes = require("./routes/signinRoutes.js");
let roleRoutes = require("./routes/rolesRoutes.js");
// Server Routes
app.use(express.json()); // This Is For Parsing JSON Data
app.use("/api/register", RegisterRoutes);
app.use("/api/signin", signInRoutes);
app.use("/api/choose-role", roleRoutes);
console.log("JWT SECRET KEY:", process.env.JWT_SECRET);
// Run The Server
app.listen(3000, () => {
    console.log("Server Is Running On Port 3000...");
});