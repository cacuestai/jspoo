import Student from './inheritance/student.js'
import Teacher from './inheritance/teacher.js'

export class Demo02 {

    static init = async () => {

        this.testStudent()
        this.testTeacher()

    }

    static testStudent() {
        const e1 = new Student({
            id: 'ID01',
            code: 'E01',
            name: 'Lucas Gutiérrez',
            semester: 1
        })

        const e2 = new Student()
        e2.id = 'ID02'
        e2.code = 'E02'
        e2.name = 'Jorge Pérez'
        e2.semester = 2

        const e3 = new Student(e1)
        const e4 = 'Jorge Pérez'

        console.log(e1)
        console.log(`e1.toJSON() => ${e1.toJSON()}`)
        console.log(`e2 => Id: ${e2.id} - Código: ${e2.code} - Nombre: ${e2.name} - Semestre: ${e2.semester}`)

        console.log(`e1.equals(e2) => ${e1.equals(e2)}`)
        console.log(`e1.equals(e3) => ${e1.equals(e3)}`)
        console.log(`e2.equals(e4) => ${e2.equals(e4)}`)
    }

    static testTeacher() {
        const t1 = new Teacher({
            id: 'ID03',
            name: 'Carlos Cuesta I',
            email: 'carlos.cuesta@ucaldas.edu.co'
        })

        const t2 = new Teacher()
        t2.id = 'ID04'
        t2.name = 'Gustavo Isaza'
        t2.email = 'gisaza@ucaldas.edu.co'

        const t3 = new Teacher(t1)
        const t4 = 'Gustavo Isaza'

        console.log(t1)
        console.log(`t1.toJSON() => ${t1.toJSON()}`)
        console.log(`t2 => Id: ${t2.id} - Nombre: ${t2.name} - Correo: ${t2.email}`)

        console.log(`t1.equals(t2) => ${t1.equals(t2)}`)
        console.log(`t1.equals(t3) => ${t1.equals(t3)}`)
        console.log(`t2.equals(t4) => ${t2.equals(t4)}`)
    }

}