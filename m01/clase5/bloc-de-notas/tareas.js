//let arrayDeNotas = require(./tareas.json)
    //Te PARSEA el JSON directamente

function escribirJSON(array){           //Sobreescribe el archivo tareas.json
    const fs = require('fs');
    let notasJson = fs.readFileSync("./tareas.json","utf-8");
    let objetoAJSON = JSON.stringify(array);

    fs.writeFileSync("./tareas.json",objetoAJSON,"utf-8")
}

function guardarTarea(nuevaTarea){      //Hace Push de la nueva tarea traida por Parametro
    const fs = require('fs');
    let notasJson = fs.readFileSync("./tareas.json","utf-8")
    let jsonAObjeto = JSON.parse(notasJson)

    jsonAObjeto.push(nuevaTarea);

    escribirJSON(jsonAObjeto); 
}

function listar(){          //Transforma el JSON en un Array para ser listado

    const fs = require('fs');
    
    let notasJson = fs.readFileSync("./tareas.json","utf-8");
    
    let jsonAObjeto = JSON.parse(notasJson)
    
    return jsonAObjeto
    }
    

function leerPorEstado (estActual){         //Crea un array nuevo usando como condicion el "EstActual" de parametro
    const fs = require('fs');
    let notasJson = fs.readFileSync("./tareas.json","utf-8");
    let jsonAObjeto = JSON.parse(notasJson)
    
    let notasFiltradas = jsonAObjeto.filter(function (elemento) {
    return elemento.estado === estActual
    })

    return notasFiltradas;
}
    
module.exports = {listar: listar , guardarTarea: guardarTarea, leerPorEstado: leerPorEstado}