const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function(){
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function(){
    return `This repository ${this.name} was created by ${this.author}`
  }
}

console.log("Nombre del repo: " + repo.name)
console.log("Autor del repo: " + repo.author)
console.log("Lenguaje del repo: " + repo.language)
console.log("Numero de commits del repo: " + repo.numberOfCommits)
console.log("Numero de stars del repo: " + repo.stars)
console.log("Numero de forks del repo: " + repo.forks)
console.log("Numero de Issues_Open del repo: " + repo.issues_open)
console.log("Numero de Issues_Close del repo: " + repo.issues_close)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())