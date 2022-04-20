// Ejemplo 5: Crear un objeto que reciba parametros
const ajolotito = {
    name: "Woopa",
    mission: 'Node JS',
    sleeping: true,
    showDetails(age) {
        const status = this.sleeping ? 'Ajolotito esta dormido' : "Ajolotito esta despierto";
        console.log(`${this.name} El ${status} y tiene ${age} años.`);
    }
} 

console.log(ajolotito.showDetails(age=22))