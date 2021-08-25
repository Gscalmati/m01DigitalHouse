let tareas = require("./tareas.js")

//const args = process.argv.slice(2)
// y el args se transforma en arg[0] ya que cortaria un Array (el argv original de 3 espacios) para hacer otro

const args = process.argv[2];
switch (args){                  //Proceso Listar Las notas
    case "listar":
    case "Listar": {
        let lista = tareas.listar()
        lista.forEach(function(item){ 
            console.log(item)
        })
    }
        break;

    case (undefined):
        console.log("Atención - Tienes que pasar una acción.")
        break;

    case "crear":                   //Proceso Agregar Nuevas Notas
        let nuevaNota = {titulo: process.argv[3], estado: "Pendiente"}
        tareas.guardarTarea(nuevaNota)
        break;

    case "filtrar":                 //Proceso Filtrar por Estado las Notas
        let notasFiltradas = tareas.leerPorEstado(process.argv[3])
        notasFiltradas.forEach(function (elemento){ console.log(elemento)})
        break;

    default:
        console.log("No entiendo qué quieres hacer.")
}

