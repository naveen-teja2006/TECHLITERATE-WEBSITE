let signInModel = require("../models/signinModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let dotenv = require("dotenv");
dotenv.config();
exports.getAllUsers = async (req, res) => {
    try {
        let { email, password } = req.body;
        let results = await signInModel.getAllUsers(email);
        if(!email || !password){
            res.status(400).json({ message: "Provide Email and Password" });
            return;
        }
        // 1.User Not Exist
        if (results.length === 0) {
            return res.status(404).json({ message: "User Not Found Create Account" });
        }
        let user = results[0];
        console.log(user)
        // 2.Compare password with hashed password
        let isPasswordCorrect = await bcrypt.compare(password, user.password);
        // 3.Incorrect password
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        // 4.Create Json Web Token
        let token = jwt.sign({
            userId: user.id,
            email: user.email,
            username:user.username
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        )
        console.log(token)
        // 5.Successfull signin
        return res.status(200).json({
            message: "Login Successfully ✅",
            token: token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        }
        );
    }
    // 6.Server Error
    catch (error) {
        return res.status(500).json({ error : "Server Error" });
    }
}