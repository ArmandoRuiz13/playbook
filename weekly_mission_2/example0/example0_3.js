// Ejemplo 3: Crear un objeto con propiedades diferentes
const ajolonauta={
    name: "woopa",
    Mission: "Node JS",
    sayHIexplorer: function (){
        console.log("Soy un ajolonauta, alo")
    },
    something: function(){
        return `Mi nombre es ${this.name}`
    }   
}
console.log("Ajolonauta: ")
ajolonauta.sayHIexplorer()
console.log(ajolonauta.something())