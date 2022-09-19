const User = require("../models/User");

const ctrlUser = {};

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrlUser.getUsers = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const users = await User.find();

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(users)
};

// Controlador para crear nuevo usuario en la Base de Datos.
ctrlUser.postUser = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { username, password, email } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newUser = new User({
        username,
        password,
        email
    });

    // Se almacena en la base de datos con método asícrono .save()
    const user = await newUser.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    return res.json({
        msg: 'Usuario creado correctamente',
        user
    });
};

// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlUser.putUser = async (req, res) => {
    return res.json({
        msg: ''
    })
};

// Controlador para eliminar usuario, requiere ID de usuario.
ctrlUser.deleteUser = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrlUser;