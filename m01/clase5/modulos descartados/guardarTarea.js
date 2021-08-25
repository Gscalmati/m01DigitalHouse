function escribirJSON(array){
    const fs = require('fs');
    let notasJson = fs.readFileSync("./tareas.json","utf-8");
    
    let objetoAJSON = JSON.stringify(array);

    fs.writeFileSync("./tareas.json",objetoAJSON,"utf-8")
}

function guardarTarea(nuevaTarea){
    const fs = require('fs');
    let notasJson = fs.readFileSync("./tareas.json","utf-8")
    let jsonAObjeto = JSON.parse(notasJson)

    jsonAObjeto.push(nuevaTarea);

    escribirJSON(jsonAObjeto); 
}

module.exports = guardarTarea;