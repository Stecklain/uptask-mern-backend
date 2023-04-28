import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

const checkAuth = async (req, res, next) => {
    let token;
    if(
        req.header.authorization &&
        req.header.authorization.startsWith("Bearer")
    ){
        try {
            token = req.header.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v");
            return next();

        } catch (error) {
            return res.status(404).json({ msg: "Hubo un error."});
        }
    }

    if(!token){
        const error = new Error('Token inválido.');
        return res.status(401).json({ msg: error.message });
    }

    next();
}

export default checkAuth;