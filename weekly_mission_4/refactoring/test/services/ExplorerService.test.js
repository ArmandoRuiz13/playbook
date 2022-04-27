const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json")

describe('Prueba unitaria para ExplorerService', () =>{
    test('Prueba 1 Imprime la cantidad de explorers que su mission es node', () => {
        // Codogigo que vamos a utlizar tal cual
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        // Validamos el codigo que esperamos
        expect(explorersInNode).not.toBeUndefined()
    })
    test('Prueba 2 cantidad de explorers por mision', () => {
        const explorersAmmoutInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersAmmoutInNode).toBe(10)
    })
})
