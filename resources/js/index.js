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
        loadDemo01()
    } else if (option === 'Herencia') {
        loadDemo02()
    }
}

/**
 * Cargar la paǵina de demostraciones iniciales y luego importar el módulo de ejemplos.
 * Observe el llamado al método init() de la clase Demo01, incluída en el módulo.
 */
function loadDemo01() {
    Helpers.loadPage('./resources/views/poo-js-01.html', 'main')
        .then(async () => await import('./poo-js-01.js').then(async module => module.Demo01.init()))
        .catch(error => console.error(error))
}

function loadDemo02() {
    // cargar la página donde se muestra el ejemplo de herencia
    Helpers.loadPage('./resources/views/poo-js-02.html', 'main')
        // cargar el script con los ejemplos
        .then(async () => await import('./poo-js-02.js').then(async module => {
            document.querySelector('pre').classList.add('code-style')
            // cargar cada una de las clases utilizadas en los ejemplos
            await Helpers.loadScript('./resources/js/inheritance/person.js', '#code-person')
            await Helpers.loadScript('./resources/js/inheritance/student.js', '#code-student')
            await Helpers.loadScript('./resources/js/inheritance/teacher.js', '#code-teacher')
            await Helpers.loadScript('./resources/js/poo-js-02.js', '#code-poo-examples')
            module.Demo02.init()
        }))
        .catch(error => console.error(error))
}

