import User from '../models/User';

export const checkDuplicateIdNumerOrEmail = async (req, res, next) => {

    const user = await User.findOne({idnumber: req.body.idnumber, idtype: req.body.idtype});
    if (user) return res.status(400).json({message: "The user already exists with this document"});

    const email = await User.findOne({email: req.body.email});
    if (email) return res.status(400).json({message: "The email already exists"});

    next();

};