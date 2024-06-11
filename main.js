function buttonClick() {
    alert('Soy el mensaje');
}

function validarEdad () {
    let input = document.getElementById('edad');
    let edad = input.value

    if (edad) {
        if ((edad < 100) && (edad > 0)) {
            if (edad >= 18) {
                alert('eres adulto, tienes ' + edad)
            } else {
                alert('eres muy joven, tienes ' + edad)
            }
        } else {
            alert('ingresa un numero menor a 100')
        }
    } else {
        alert('oye no has metido una edad')
    }

}