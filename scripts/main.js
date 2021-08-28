//Ejercicio 1
 function ejercicio01() {
    let a = parseInt(prompt("Ingrese primer número"));
    let b = parseInt(prompt("Ingrese segundo número"));
    console.log("Resultado de la Suma:", a + b);
}

//Ejercicio 2
function ejercicio02() {
    let a = parseInt(prompt("Ingrese primera nota del examen"));
    let b = parseInt(prompt("Ingrese segunda nota del examen"));
    let c = parseInt(prompt("Ingrese tercera nota del examen"));
    let d = parseInt(prompt("Ingrese cuarta nota del examen"));
    console.log("Resultado del promedio: ", (a + b + c + d)/4);
}
 
//Ejercicio 3
function ejercicio03() {
    let base = parseFloat(prompt("Ingrese base rectángulo :"));
    let altura = parseFloat(prompt("Ingrese altura del rectángulo :"));
    console.log("Es área del rectángulo es: ", (base * altura));
}

//Ejercicio 4
function ejercicio04() {
    let base = parseFloat(prompt("Ingrese base triángulo :"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo :"));
    console.log("Es área del triángulo es: ", (base * altura)/ 2);
}

//Ejercicio 5
function ejercicio05() {
    let radio = parseFloat(prompt("Ingrese el radio de la circunferencia :"));
    let valorpi = 3.14

    console.log("El área de la circunferencia es: ", (valorpi * (radio ** 2)));
}

//Ejercicio 6
function ejercicio06() {
    let horastrabajadas = parseInt(prompt("Ingrese la cantidad de horas diarias trabajadas"));
    let sueldoporhora = parseInt(prompt("Ingrese el sueldo por hora del colaborador "));

    console.log("El sueldo semanal del colaborador es: ", (horastrabajadas * sueldoporhora * 7));
}
//ejercicio 7
function ejercicio07() {
    let metrosdetela = parseFloat(prompt("Ingrese la cantidad de metros de tela a pedir"));
    let pulgadas = 0.0254;

    console.log("Su pedido de tela en pulgadas es: ", (metrosdetela / pulgadas));
}

//ejericio 8
function ejercicio08() {
    let soles = parseFloat(prompt("Ingrese el monto en soles a cambiar"));
    let tipocambio = parseFloat(prompt("Ingrese el tipo de cambio del dolar").toFixed(3));

    console.log("Con el monto ingresado en soles usted puede adquirir: ", (soles / tipocambio).toFixed(3));
}

// ejericio 9
function ejercicio09() {
    let añonacimiento = parseInt(prompt("Ingrese el año de su nacimiento"));
    let añoactual = 2021;

    console.log("Usted tiene: ", (añoactual - añonacimiento));
}

//ejercicio 10
function ejercicio10() {
    debugger
    let nombre = "";
    let edad = 1;
    for (let cnt = 1; cnt < 4; cnt++) {
        let nombre1 = prompt("Ingrese el nombre de la persona");
        let edad1 = parseInt(prompt("Ingrese la edad de la persona"));
        
        if (cnt == 1) {
            edad = edad1;
            nombre = nombre1;
        } else  if (edad1 < edad) {
            console.log(" ingreso ");
                edad = edad1;
                nombre = nombre1;
        }
    }
    console.log(`La persona menor es: ${nombre} con la edad de ${edad} años`);
}

ejercicio10()

//ejercicio 11
function ejercicio11() {
    let empleado = prompt("Ingrese nombre del empleado :");
    let años = parseInt(prompt("Ingrese los años de antigüedad :"));
    let bono = 0;
    if (años > 5) {
        alert("Le corresponde un bono de US$ 1,000") ;
    } else {
        alert("Le corresponde un bono de US$ " + años * 100) ;
    }
}

//ejercicio 12
function ejercicio12() {
    let salario = 1500;
    let incremento = 0;
    let salariofinal = 1500
    for (let cnt = 1; cnt < 7; cnt++) {
        incremento = salariofinal * 0.1
		salariofinal = salariofinal + incremento
        alert("El salario final del año " + cnt.toString() + " fue de " + salariofinal.toString())
    }
}

//ejercicio 13
function ejercicio13() {
    let alumnos = prompt("Ingrese la cantidad de alumnos :");
    let notaminima = parseInt(prompt("Ingrese la nota mínima aprobatoria :"));
    let aprobados = 0;
    let desaprobados = 0;

    for (let cnt = 1; cnt <= alumnos; cnt++) {
        let nota = parseInt(prompt("Ingrese la calificación del alumno :"));
        if ( nota < notaminima) {
            desaprobados = desaprobados + 1
        } else {
            aprobados = aprobados + 1
        }
    }
    alert("Cantidad de Alumnos Aprobados " + aprobados.toString() + " Cantidad de Alumnos Desaprobados " + desaprobados.toString())
}

//ejercicio 14
function ejercicio14() {
    let cantidadlote = parseInt(prompt("Ingrese la cantidad de focos del lote :"));
    let focoverde = 0;
    let focoblanco = 0;
    let focorojo = 0;
    let n = 0;

    while (n < cantidadlote) {
        let color = prompt("Ingrese el color del foco :");
        if (color == "verde") {
            focoverde = focoverde + 1;
        } else if (color == "blanco") {
            focoblanco = focoblanco + 1;
        } else if(color == "rojo") {
            focorojo = focorojo + 1;
        }
        n++
    }
    console.log(`cantidad de focos verdes ${focoverde} focos blancos ${focoblanco} focos rojos ${focorojo}`);
}

ejercicio14()


// ejercicio15
function ejercicio15() {
    let edad = parseInt(prompt("Ingrese su edad: ")); 
    let elecciones = parseInt(prompt("Ingrese el año de las próximas elecciones: ")); 
    let añoactual = 2021;

    if (edad + elecciones - añoactual >= 18) {
        console.log("SI está aptop para votar en las próximas elecciones");
    } else {
        console.log("NO está aptop para votar en las próximas elecciones");
    }
}

ejercicio15()

