const express = require('express');


// OBTENER TODOS LOS USUARIOS
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const getAllUsers = (req, res) => {

    const users = [
        {
            id: 1,
            name: 'Fernando'
        },
        {
            id: 2,
            name: 'Marta'
        },
    ]

    res.json(users);
};


// CREAR USUARIO
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const createUser = (req, res) => {

    const user = req.body;
    user.id = 86546;

    const result = {
        message: 'User created',
        user
    }
    res.status(201).json(result);
};



// ACTUALIZAR USUARIO:ID
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateUser = (req, res) => {

    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User updated',
        user
    }
    res.json(result);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updatePartialUser = (req, res) => {
    const result = {
        message: 'User updated with patch'
    }
    res.json(result);
};
// ELIMINAR USUARIO
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteUser = (req, res) => {

    const { id } = req.params;
    //const id = req.params.id;
    const result = {
        message: `User with id: ${id} deleted`
    }
    res.json(result);
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}