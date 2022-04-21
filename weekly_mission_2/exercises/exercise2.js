const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
  // Ejercicio 2.1 y 2.2 recibir todos los valeres de la propiedad name y stack
  explorers.forEach(explorer => console.log(`El nombre del explorer es: ${explorer.name} y su stack es ${explorer.stack}`))
  //  Ejercicio 2.3 lista de los valores de una propiedad
  const explorers_stacks = explorers.map(explorerlist => explorerlist.stack)
  console.log(explorers_stacks)
  // Ejercicio 2.4 impresion las propiedades de los explorers que tienen js
  const explorer_js = explorers.filter(explorerslist => explorerslist.stack.includes("js"))
  console.log(explorer_js)
  // Ejercicio 2.5 impresion primer usuario con cdmx, fin solo imprime al primera
  const first_explorer_in_cdmx = explorers.find(explorercdmx =>  explorercdmx.city === "CDMX")
  console.log(first_explorer_in_cdmx)
  // Ejercicio 2.6 utilizacion del reduce, para obtener la suma de los ejercicios completados
  const all_exercise = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed,0)
  console.log(all_exercise)
  // Ejercicio 2.7 utilizacion de SOME para para saber si almenos un explorer tiene una propiedad
  const one_frontFinished = explorers.some(my_exercisesFinished => my_exercisesFinished.missions.frontend.isFinished === true)
  console.log(one_frontFinished)
  // Ejercicio 2.8 Utilizacion de EVERY para validar si todos los explorers tienen isFinished del onboardig como true
  const all_onboardigfinished = explorers.every(my_all_onboardingFinished => my_all_onboardingFinished.missions.onboarding.isFinished === true)
  console.log(all_onboardigfinished)
