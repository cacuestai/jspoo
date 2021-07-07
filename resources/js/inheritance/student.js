import Person from './person.js'

export default class Student extends Person {

    #code
    #semester

    constructor(p = { id: '', code: '', name: '', semester: 0 }) {
        // a diferencia del constructor de Persona, aquí no se usa desestructuración
        super({ id: p.id, name: p.name })
        this.#code = p.code
        this.#semester = p.semester
    }

    get code() {
        return this.#code
    }

    /**
     * @param {string} code
     */
    set code(code) {
        this.#code = code
    }

    get semester() {
        return this.#semester
    }

    /**
     * @param {number} semester
     */
    set semester(semester) {
        this.#semester = semester
    }

    toJSON() {
        return JSON.stringify({
            id: this.id, // usa el accesor
            code: this.#code, // usa el atributo
            name: this.name, // usa el accesor
            semester: this.#semester // usa el atributo
        })
    }

}
