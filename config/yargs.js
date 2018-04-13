const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    demand: true,
    default: true,
    alias: 'c',
    desc: ' Marca la tarea por hacer como completado o pendiente'
};

const argv = require('yargs')
    .command('crear', 'Crear tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
};