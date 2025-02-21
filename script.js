let display = document.getElementById('display');

function agregarValor(valor) {
    // Obtener el último carácter del display
    let ultimoCarácter = display.value.charAt(display.value.length - 1);

    // Verificar si el valor ingresado es un operador
    let operadores = ['+', '-', '*', '/'];
    
    // Si el último carácter es un operador y el valor ingresado también es un operador, no hacer nada
    if (operadores.includes(ultimoCarácter) && operadores.includes(valor)) {
        return;  // No se agrega el operador
    }

    // Si no es un operador consecutivo, agregarlo al display
    display.value += valor;
}

function limpiar() {
    display.value = '';
}

function calcular(){
    try {
        // Validamos que la expresión no esté vacía ni tenga errores obvios
        if(display.value === '' || /[^0-9+\-*/(). ]/.test(display.value)) {
            alert("Expresión inválida");
            return;
        }
        display.value = eval(display.value);
    } catch (error) {
        alert("Expresión inválida");
    }
}

