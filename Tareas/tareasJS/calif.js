

function calcularNota(){
    //declaracion
    const p1 = Number(document.getElementById('1p').value);
    const p2 = Number(document.getElementById('2p').value);
    const p3 = Number(document.getElementById('3p').value);
    const ef = parseFloat(document.getElementById('f1').value);
    const tf = parseFloat(document.getElementById('t1').value);
    const mostrar = document.getElementById('resultado');
    const mostrarp1 = document.getElementById('mp1');

    //Operaciones
    let promedio = ((p1 + p2 + p3)/3);
    let notaFinal = promedio * 0.55 + ef * 0.30 + tf *0.15;


//Condicionales
if(notaFinal > 5.0){
    mensajeNota = "Pasaste"
}else if(notaFinal == 5.0){
    mensajeNota = "al palo y adentro"
}
else{
    mensajeNota = "you fucked up"
}

switch(p1){
    case 1:
        mostrarp1.innerHTML += `<h1>Usted está jodido</h1>`;
        break;
    default:
        mostrarp1.innerHTML += `<h1>Usted está desjodido</h1>`;
}




    //Mostrar
    console.log("la nota parcial es:" + promedio);
    console.log("La nota final es: " + notaFinal);
    mostrar.textContent =`Su calificacion final es: ${notaFinal.toFixed(1)} usted está: ${mensajeNota} `
}
