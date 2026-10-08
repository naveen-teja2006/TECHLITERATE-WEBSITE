let jwt = require("jsonwebtoken");
function authenticateToken(req, res, next) {
    try {
        // First get the authorization token in the header
        const authHeader = req.headers.authorization;
        console.log("AuthHeader: ", authHeader);
        if (!authHeader) {
            // Client side error so 401
            res.status(401).json({ message: "Authorization Token Not Found" });
            return;
        }
        // Token is at authHeader.split(" ")[1] because the header 
        // is in the format "Bearer <token>" so we 
        // split it by space and take the second part which is the token
        const token = authHeader.split(" ")[1];
        // console the token for testing through the browser
        console.log("Token: ", token);
        if (!token) {
            // Client side error so 401
            res.status(401).json({ message: "Token required" });
            return;
        }
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("DECODED TOKEN", decoded);
        req.user = decoded;
        next();
    } catch (error) {
        // Client side error so 401
        res.status(401).json({ message: "Invalid or expired token" });
    }
}

module.exports = authenticateToken;
