'use strict'

import Helpers from './Helpers.js'

document.addEventListener('DOMContentLoaded', async () => {

    // se definen las acciones para cuando el usuario pulsa clic sobre la lista de opciones
    document.querySelectorAll('#menu li').forEach((element) =>
        element.addEventListener("click", event => chooseAction(event.target.innerHTML))
    )

})

/**
 * Determina qué hacer cuando el usuario pulsa sobre una de las opciones de la lista
 * @param {String} option El elmento de lista elegido
 */
function chooseAction(option) {
    if (option === 'Módulos y clases') {
        cargarDemo01()
    } else if (option === 'Herencia') {
        document.querySelector('main').innerHTML = '<strong>Opción no implementada</strong>'
    }
}

/**
 * Cargar la paǵina de demostraciones iniciales y luego importar el módulo de ejemplos.
 * Observe el llamado al método init() de la clase Demo01, incluída en el módulo.
 */
function cargarDemo01() {
    Helpers.loadPage('./resources/views/poo-js-01.html', 'main')
        .then(async () => await import('./poo-js-01.js').then(async modulo => modulo.Demo01.init()))
        .catch(error => console.log(error))
}
