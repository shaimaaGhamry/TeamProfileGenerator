const Employee = require("./Employee");

class Intern extends Employee{
    constructor(id, name, email, school){
        super(id, name, email, "Intern");
        this.school = school;
    }
}

module.exports = Intern;