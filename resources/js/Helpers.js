export default class Helpers {

    /**
     * Genera un número entero aleatorio en un rango determinado
     * @param {int} min El intervalo inferior
     * @param {int} max El intervalo superior
     * @returns Un valor aleatorio entero en un rango determinado
     */
    static random = (min, max) => {
        min = Math.ceil(min) // aproximar al entero superior
        max = Math.floor(max) // aproximar al tenero inferior
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    /**
     * 
     * @param {String} selector 
     * @param {Array objects} items 
     * @param {String} value 
     * @param {String} text 
     * @returns 
     */
    static populateSelectList = (selector, items = [], value = '', text = '') => {
        let list = document.querySelector(selector)
        list.options.length = 0
        items.forEach(item => list.add(new Option(item[text], item[value])))
        return list // <-- OJO
    }

    /**
     * Realizar una petición HTTP: ver https://lenguajejs.com/javascript/peticiones-http/fetch/
     * @param {String} url Dirección a la que se hace la petición
     * @param {Object} options Un objeto que puede contener: método, cuerpo, cabeceras y credenciales 
     * @param {String} type Puede ser [json|text|blob|formData|...]
     * @returns La respuesta a la petición en un formato dado según el parámetro type
     */
    static fetchData = async (url, options = {}, type = 'json') => {

        if (Object.entries(options).length > 0) {
            if (!("headers" in options)) {
                options.headers = {
                    "Content-Type": "application/json",
                }
            }
            if ("body" in options) {
                options.body = JSON.stringify(options.body)
            }
        }

        const response = await fetch(url, options)

        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`)
        }

        return await response[type]() // <-- OJO
    }

    static loadPage = async (url, container) => {
        const response = await fetch(url)
        const element = document.querySelector(container)
    
        if (response.ok) {
            const html = await response.text()
            element.innerHTML = html
            return element
        }
    
        throw new Error(`${response.status} - ${response.statusText}`)
    }

    static isNumeric = (str) => {
        if (typeof str !== 'string') { // // sólo se procesan strings 
            return false
        }
        return !isNaN(str) && !isNaN(parseFloat(str))
    }

}

// nótese que este código queda fuera del ámbito de la clase

/**
 * Cambia las ocurrencias de $# por los strings indicados como argumento. Ejemplo:
 * let z = 'Probando $0 de $1 con $2'.translate('strings', 'JavaScript', 'expresiones regulares')
 * retorna 'Probando strings de JavaScript con expresiones regulares'
 * Ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters
 *
 * @param  {...any} texts los strings que se usan para hacer el reemplazo
 * @returns El string original con los reemplazos realizados
 */
String.prototype.translate = function (...texts) {
    let str = this
    const regex = /\$(\d+)/gi // no requiere comprobación de mayúsculas pero se deja como ejemplo
    return str.replace(regex, (item, index) => texts[index])
}
