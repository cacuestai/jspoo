'use strict'

import Helpers from './Helpers.js'

let randomNumber

document.addEventListener('DOMContentLoaded', async () => {

    // generar y mostrar por consola un valor aleatorio entre 1000 y 2000
    randomNumber = Helpers.random(1000, 2000);
    // intentar adivinar el número aleatorio generado
    document.querySelector('#try-luck').addEventListener('click', e => tryLuck())

    // ejemplo del uso de String.prototype.translate()
    document.querySelector('#try-replace').addEventListener('click', e => tryReplace())
    
    // crear un array de objetos a partir de un archivo JSON y mostrarlo por consola
    const departments = await Helpers.fetchData('./data/departamentos.json')
    console.log(departments);
    // usar un array de objetos para poblar un select
    const listDepartments = Helpers.populateSelectList('#departments', departments, 'codigo', 'nombre')
    // seleccionar el 6° elemento de la lista
    listDepartments.selectedIndex = 5
    displayDepartment(listDepartments) 
    // visualizar los cambios en la selección de elementos
    listDepartments.addEventListener('change', e => displayDepartment(listDepartments))

})

/**
 * Intentar adivinar un número generado aleatoriamente
 */
function tryLuck() {
    const strNumber = document.querySelector('#number').value

    if (!Helpers.isNumeric(strNumber)) {
        document.querySelector('#random > p').innerHTML = 'Intente con números y le irá mejor'
    } else {
        const number = parseInt(strNumber)
        if (number > randomNumber) {
            document.querySelector('#random > p').innerHTML = `No, es menor que ${number}`
        } else if (number < randomNumber) {
            document.querySelector('#random > p').innerHTML = `No, es mayor que ${number}`
        } else {
            document.querySelector('#random > p').innerHTML = '¡Felicitaciones!, ese es'
        }
    }
}

function tryReplace() {
    const template = document.querySelector('#template').value
    // se reemplazan los marcadores $0, $1 y $2 de la cadena original
    const result = template.translate('strings', 'JavaScript', 'expresiones regulares')
    document.querySelector('#result').innerHTML = `<u>${result}</u>`
}

/**
 * Muestra los datos de un elemento seleccionado
 * @param {select} list Una referencia a un select list
 */
 function displayDepartment(list) {
    const item = list.options[list.selectedIndex]
    document.querySelector('#department span').innerHTML = `Código: ${item.value}, Nombre: ${item.text}`
    document.querySelector('#departmentIndex').innerHTML = list.selectedIndex
}



