const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({error:"No autorizado"})
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            throw new Error();
        }
        req.user = decoded;
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Error validando el token"})
    }
}

module.exports = verifyToken;