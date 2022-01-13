import jwt from 'jsonwebtoken';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {    

    try {
        
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message: "No token provided"});

        const decoded = jwt.verify(token, process.env.SECRET);
        req.userId = decoded.id;

        const user = await User.findById(req.userId, {password: 0});
        if (!user) return res.status(406).json({message: "No user found"});

        next();

    } catch (error) {
        return res.status(403).json({message: "Unauthorized"});
    }

};

export const isUser = async (req, res, next) => {    
    const user = await User.findById(req.userId);
    if( user.role === 'user' ){
        next();
        return;
    } else {
        return res.status(403).json({message: "Require User role"});
    }
};

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId);
    if( user.role === 'admin' ){
        next();
        return;
    } else {
        return res.status(403).json({message: "Require Admin role"});
    }
};