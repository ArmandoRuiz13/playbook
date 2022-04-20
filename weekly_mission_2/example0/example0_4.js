// Ejemplo 4: Crear un objeto con metodos
const ajolotito = {
    name: "Woopa",
    mission: 'Node JS',
    sleeping: true,
    showDetails() {
        const status = this.sleeping ? 'Ajolotito esta dormido' : "Ajolotito esta despierto";

        console.log(`${this.name} El ${status}.`);
    }
};

ajolotito.showDetails()