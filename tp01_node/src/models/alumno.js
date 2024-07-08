//propiedades (username,DNI y edad)
//método toString() que retorne la información del alumno.
export default class Alumno {
    constructor(username, dni, edad) {
      this.username = username;
      this.dni = dni;
      this.edad = edad;
    }

    toString() 
    {
        return `Username: ${this.username} \nDNI: ${this.dni} \nEdad: ${this.edad}`
    }
}