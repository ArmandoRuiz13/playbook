class repo{
    constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){//getTotalIssues,getGeneralInfo){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
        // this.getTotalIssues = 
        // this.getGeneralInfo
    }
}


const repo1= new repo( "LaunchX","carlogilmar","JavaScript",100,199,299,10,10)
console.log(repo1) 