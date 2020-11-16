const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
};
const { descripcion: opts2 } = opts;
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion: opts2 })
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Elimina una elemento por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}