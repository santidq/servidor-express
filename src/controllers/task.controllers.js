const Task = require("../models/Task");

const ctrlTask = {};

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrlTask.getTask = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const Tasks = await Task.find();

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(Tasks)
};

// Controlador para crear nuevo usuario en la Base de Datos.
ctrlTask.postTask = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { title, description, date } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newTask = new Task({
        title,
        description,
        date
    });

    // Se almacena en la base de datos con método asícrono .save()
    const task = await newTask.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    return res.json({
        msg: 'Tarea creado correctamente',
        task
    });
};

// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlTask.putTask = async (req, res) => {
    return res.json({
        msg: ''
    })
};

// Controlador para eliminar usuario, requiere ID de usuario.
ctrlTask.deleteTask = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrlTask;