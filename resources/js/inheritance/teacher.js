import Person from './person.js'

export default class Teacher extends Person {

    #email

    constructor(p = { id: '', name: '', email: '' }) {
        // a diferencia del constructor de Persona, aquí no se usa desestructuración
        super({ id: p.id, name: p.name })
        this.#email = p.email
    }

    get email() {
        return this.#email
    }

    set email(email) {
        this.#email = email
    }

    toJSON() {
        return JSON.stringify({
            id: this.id, // usa el accesor
            name: this.name, // usa el accesor
            email: this.#email // usa el atributo
        })
    }

}
