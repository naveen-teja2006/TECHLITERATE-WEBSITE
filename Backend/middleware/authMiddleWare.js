let jwt = require("jsonwebtoken");
function authenticateToken(req, res, next) {
    try{
        // First get the authorization token in the header
        const authHeader = req.headers.authorization;
        if(!authHeader){
            res.status(401).json({ message: "Authorization Token Not Found" });
            return;
        }
        // Token is at authHeader.split(" ")[1] because the header 
        // is in the format "Bearer <token>" so we 
        // split it by space and take the second part which is the token
        const token = authHeader.split(" ")[1];
        if(!token){
            res.status(401).json({ message: "Token required" });
            return;
        }
        let decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
}