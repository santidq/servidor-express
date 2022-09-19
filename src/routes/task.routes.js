// El método Router() de Express nos permite crear rutas
const router = require('express').Router();

// Importando controladores
const {
    getTask,
    postTask,
    putTask,
    deleteTask,

} = require('../controllers/task.controllers');

// Definiendo rutas

// Ruta para obtener todos los usuarios
router.get('/task', getTask);

// Crear nuevo usuario
router.get('/task', postTask);

// Editar usuario, requiere ID de usuario
router.put('/task', putTask);

// Eliminar usuario, requiere ID de usuario
router.delete('/task', deleteTask);



// Se exporta el objeto router que contiene las rutas
module.exports = router;