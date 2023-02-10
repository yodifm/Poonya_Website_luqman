import User from "../models/users.js";

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }

}

export const getUsersById = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                user_id: req.params.id
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const getUsersByUsername = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                username: req.params.username
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const getUsersByRoles = async(req, res) => {
    try {
        const response = await User.findAll({
            where:{
                roles: req.params.roles
            }
        });
        res.status(200).json(response);
    }
    catch(error){
        console.log(error.message)
    }
}

export const createUser = async(req, res) => {
    try {
        const response = await User.create(req.body);
        res.status(200).json({
            msg: "User Created",
            response: response
        });
    }
    catch(error){
        console.log(error.message)
    }
}