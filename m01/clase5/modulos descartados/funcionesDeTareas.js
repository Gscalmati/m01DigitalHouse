function funcionesDeTareas(){

const fs = require('fs');

let notasJson = fs.readFileSync("./tareas.json","utf-8");

let jsonAObjeto = JSON.parse(notasJson)

return jsonAObjeto
}


module.exports = funcionesDeTareas;
