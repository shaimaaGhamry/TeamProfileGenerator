const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./generateHTML.js");

var team = [];



addManager();

function addManager(){
    const questions = [{
        type : "input",
        message : "Enter the name of the Manager", 
        name : "empName"
    },{
        type : "input",
        message : "Enter the Employee ID",
        name : "empID"
    },{
        type : "input",
        message : "Enter the employee Email",
        name : "empEmail"
    },{
        type: "input",
        message : "enter the office Number",
        name : "officNum"
    }];

    inquirer.prompt(questions).then(response => {
        const manager = new Manager(response.empID, response.empName, response.empEmail, response.officNum) 
       team.push(manager);
       addEmployees();
    });

}

function addEmployees (){    

    inquirer.prompt([{
        type : "list",
        message : "what is the role of the team member to be added",
        choices : ["Engineer", "Intern", "Exit"],
        name : "employeeType"
    }]).then(response =>{
        var inputType = response.employeeType;
        if (inputType == "Exit"){
            console.log(team);
            let html = generateHTML(team);
            return;
        }else{
            let questions = [{
                type : "input",
                message : "Enter the name of the employee", 
                name : "empName"
            },{
                type : "input",
                message : "Enter the Employee ID",
                name : "empID"
            },{
                type : "input",
                message : "Enter the employee Email",
                name : "empEmail"
            }];

            if (inputType == "Engineer"){
                questions.push({
                    type : "input",
                    message : "Enter the GitHub Repository Name",
                    name  : "gitHubName"
                });
            }else{
                questions.push({
                    type : "input",
                    message : "Enter the  School Name",
                    name : "internSchool"
                });
            }

            inquirer.prompt(questions).then(function(response) {
               
            if(inputType == "Engineer"){
                const engineer = new Engineer(response.empID, response.empName, response.empEmail, response.gitHubName);
                team.push(engineer);
            }else{
                const intern = new Intern(response.empID, response.empName, response.empEmail, response.internSchool);
                team.push(intern);
            }

            return addEmployees();
            });
        }

    });
}