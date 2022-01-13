import User from '../models/User';
import Follow from '../models/Follow';

import { cleanParams } from '../libs/cleanParams';

export const createUser = async (req, res) => {

    const { firstname, lastname, idnumber, typedoc, address, phone, email, password, role } = req.body;
    
    const newUser = new User({
        firstname,
        lastname,
        idnumber,
        typedoc,
        address,
        phone,
        email,
        password: await User.encryptPassword(password),
        role
    });

    const savedUser = await newUser.save();

    return res.status(200).json(savedUser);

};

export const getUsers = async (req, res) => {
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    const users = await User.paginate({}, {limit, page});
    return res.status(200).json(users);
};

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({message: 'User not found'});
    return res.status(200).json(user);
};

export const getFilteredUsers = async (req, res) => {
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    const objClean = cleanParams(req.body);
    const users = await User.paginate({objClean}, {limit, page});
    if (!users || users.length == 0) return res.status(404).json({message: 'User not found'});
    return res.status(200).json(users);
};

export const updateUserById = async (req, res) => {    
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!updatedUser) return res.status(404).json({message: 'User not found'});
    return res.status(200).json(updatedUser);
};

export const deleteUserById = async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({message: 'User not found'});
    return res.status(200).json({message: 'User deleted successfully'});
};

export const followUser = async (req, res) => {
    
    const { id } = req.params;

    const userToFollow = await User.findById(id, {password: 0});
    if (!userToFollow) return res.status(404).json({message: "No user to follow found"});

    const isFollow = await Follow.findOne({userid: req.userId, followid: id});
    if (isFollow) return res.status(406).json({message: "You're already following this user"});

    const followUser = new Follow({
        userid: req.userId,
        followid: id
    });

    followUser.save();
    return res.status(200).json({message: 'User was successfully followed'});
    
};

export const unFollowUser = async (req, res) => {

    const { id } = req.params;

    const userToUnfollow = await User.findById(id, {password: 0});
    if (!userToUnfollow) return res.status(404).json({message: "No user to unfollow found"});

    const isFollow = await Follow.findOne({userid: req.userId, followid: id});
    if (!isFollow) return res.status(406).json({message: "You're not following this user"});

    await Follow.findByIdAndDelete(isFollow._id);
    return res.status(200).json({message: "You've unfollowed this user"});

};