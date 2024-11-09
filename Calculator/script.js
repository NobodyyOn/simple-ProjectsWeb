
// Agrega un valor a la pantalla
function addToScreen(value) {
    document.getElementById('screen').value += value
}


// Borra la pantalla
function _delete() {
    document.getElementById('screen').value = ''
}

// Realiza los calculos con la funcion eval y los muestra en la pantalla
function calculate() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value)
    } catch (error) {
        document.getElementById('screen').value = 'Error'
    }
}