const pullrequest = {
    title: "LaunchX_change",
    branchname: "main",
    dateCreated: "12/03/2022",
    status: true,
    Author: "Armando Ruiz",
    repositorynameAsocciated: "Node JS week 2",
    getStatus: function(){
        Onstatus =  this.status ? 'Activo' : "No activo";
        console.log("El estado del pullrquest es: " + Onstatus)
    },
    getTittleAndAuthor: function(){
      return `Title repository ${this.title} by ${this.Author}`
    }
}
   
console.log("Titulo del pullrequest: " + pullrequest.title)
console.log("Nombre del branch: " + pullrequest.branchname)
console.log("Fecha de creacion del pullrequest: " + pullrequest.dateCreated)
console.log("Status del pullrequest: " + pullrequest.status)
console.log("Nombre del reposotorio asociado del Pullrequest: " + pullrequest.repositorynameAsocciated)
console.log(pullrequest.getStatus())
console.log(pullrequest.getTittleAndAuthor())