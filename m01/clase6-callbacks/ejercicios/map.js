let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function (hora) {
    return hora -1;
});

console.log(horariosAtrasados)