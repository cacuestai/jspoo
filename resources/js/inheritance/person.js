export default class Person {

    #id
    #name

    constructor(p = { id: '', name: '' }) {
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#desestructuraci%C3%B3n_de_objetos
        const {id, name} = p;
        this.#id = id
        this.#name = name
    }

    get id() {
        return this.#id
    }

    set id(id) {
        this.#id = id
    }

    get name() {
        return this.#name.toUpperCase()
    }

    set name(name) {
        this.#name = name
    }

    toJSON() {
        return JSON.stringify({
            id: this.#id,
            name: this.#name
        })
    }

    equals(object) {
        if (object === this) {
            return true
        }

        if (!(object instanceof Person)) {
            return false
        }

        return this.id === object.id
    }

}
