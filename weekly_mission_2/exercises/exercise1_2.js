const issues = {
    title: "LaunchX_change",
    repositorynameAsocciated: "Node JS week 2",
    status: "Active",
    numberOfComments: 100,
    labels: 19,
    author: "Armando Ruiz",
    dateCreated: "10/02/2022",
    lastUpdate: "10/03/2022",
    getTittleAndAuthor: function(){
      return `Title repository ${this.title} by ${this.author}`
    },
    getGeneralInfo: function(){
      return `This repository is ${this.status} was created at ${this.dateCreated} last update in ${this.lastUpdate}`
    }
}
   
console.log("Titulo del Issue: " + issues.title)
console.log("Nombre del Issue Asociado: " + issues.repositorynameAsocciated)
console.log("Status del Issue: " + issues.status)
console.log("Numero de comentarios del Issue: " + issues.numberOfComments)
console.log("Numero de labels del Issue: " + issues.labels)
console.log("Autor del Issue: " + issues.author)
console.log("Fecha de creacion del Issue: " + issues.dateCreated)
console.log("Ultima actualizacion del Issue: " + issues.lastUpdate)
console.log(issues.getTittleAndAuthor())
console.log(issues.getGeneralInfo())