import jwt from "jsonwebtoken";

export const getToken = async (req, res) => {
    try {
        const authHeader = req.headers.authorization; // ✅ Get token from headers
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
          return res.status(401).json({ authenticated: false, message: "No token provided" });
        }
    
        const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    
        res.status(200).json({ authenticated: true, user: verifyToken });
    
      } catch (error) {
        console.log("Token has expired or is invalid!");
        res.status(401).json({ authenticated: false, message: "Token expired or invalid" });
      }
};