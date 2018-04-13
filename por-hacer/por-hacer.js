const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    return new Promise((resolve, reject) => {
        fs.writeFile(`db/data.json`, data, err => {
            if (err)
                reject(err);
            else
                resolve(`data.json`);
            // console.log(`El archivo tabla-${base}.txt ha sido creado!`);

        });
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const crear = (descripcion) => {

    cargarDB();

    const descIgual = getListado();
    for (let tarea of descIgual) {
        if (descripcion === tarea.descripcion) {
            console.log('Ya existe esa tarea');
            return;
        }
    }

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB().then(res => {
        console.log('Tarea Creada');
    });

    return porHacer;
};


const actualizar = (descripcion, completado) => {

    cargarDB();

    // comprobar si la descripción es igual a alguna que que ya esté en las tareas
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB().then(res => {
            console.log('Tarea Actualizada');
        });
        return true;
    } else {
        console.log('No se ha podido actualizar la tarea');
        return false;
    }

};

// const borrar = (descripcion) => {

//     cargarDB();

//     // comprobar si la descripción es igual a alguna que que ya esté en las tareas
//     let index = listadoPorHacer.findIndex(tarea => {
//         return tarea.descripcion === descripcion;
//     });

//     if (index >= 0) {
//         listadoPorHacer.splice(index, 1);
//         guardarDB().then(res => {
//             console.log('Tarea Borrada');
//         });
//         return true;
//     } else {
//         console.log('No se ha podido borrar la tarea');
//         return false;
//     }

// };
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB().then(res => {
            console.log('Tarea Borrada');
        });
        return true;
    }
};



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};