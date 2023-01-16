const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(id, name, email, gitHubName){
        super(id, name, email, "Engineer");
        this.gitHubName = gitHubName;
    }
}

module.exports = Engineer;