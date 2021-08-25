let autos = require("./autos")

let concesionaria = {
    autos: autos,
  
    buscarAuto: function (patente) {
       for (let i = 0 ; i < autos.length ; i++){
          if (autos[i].patente === patente){
             return autos[i];
          }
       }
       return null;
    }, 

    venderAuto: function (patente){
        let autoVendido = this.buscarAuto(patente) 
        if (autoVendido != null){
        autoVendido.vendido = true;
        console.log("Auto vendido")
    } else
        console.log("No se encontró el auto")
        },
        
    autosParaLaVenta: function (){
        let autosDisponibles = autos.filter(function (elemento){
            return (elemento.vendido === false)
        })
        return autosDisponibles
    },  

    autosNuevos: function (){
        let autosDisponibles = this.autosParaLaVenta()
        return autosDisponibles.filter(function (elemento){
           return (elemento.km < 100)
        })
     },

    listaDeVentas: function(){
        let autosVendidos = [];
        for (let i = 0 ; i < autos.length ; i++){
            if (autos[i].vendido === true){
                autosVendidos.push(autos[i].precio)
            }
        }
        return autosVendidos 
    },

    totalDeVentas: function(){
        totalVenta = this.listaDeVentas()
        if (totalVenta.length > 0){
            return (totalVenta.reduce(function(acumulador, elemento){
             return (acumulador + elemento)
        }))
    } else {
       return 0
    }
    },

    puedeComprar: function(auto, persona){
        let valorCuota = (auto.precio / auto.cuotas)
        if ((persona.capacidadDePagoTotal >= auto.precio) && (persona.capacidadDePagoEnCuotas >= valorCuota)){
            return true
        } else { return false}
    },


    autosQuePuedeComprar: function(persona){
        let listaAutos = this.autosParaLaVenta();
        let listaParaPersona = listaAutos.filter(function (elemento){
            return (concesionaria.puedeComprar(elemento,persona) == true)
        })
        return listaParaPersona;
    }


}

let persona1 = {
    nombre: "Pedro",
    capacidadDePagoTotal:10000000000000,
    capacidadDePagoEnCuotas:30000,
}

let persona2 = {
    nombre: "Pedro",
    capacidadDePagoTotal:10000000000000,
    capacidadDePagoEnCuotas:7200,
}

//concesionaria.venderAuto("APL123")
//concesionaria.venderAuto("JJK116")
console.log(concesionaria.autosQuePuedeComprar(persona2))