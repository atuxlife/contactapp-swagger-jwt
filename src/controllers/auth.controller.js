import User from '../models/User';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    
    const userFound = await User.findOne({email: req.body.email});
    if (!userFound) return res.status(404).json({message: "User not found"});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);
    if (!matchPassword) return res.status(403).json({token: null, message: "Invalid password"});

    const token = jwt.sign({id: userFound._id}, process.env.SECRET , {
        expiresIn: 86400 // 24 hours
    });

    res.status(200).json({token});

};