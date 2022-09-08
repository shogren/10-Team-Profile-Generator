const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

team = [];

function run () {

    function buildTeam () {
      inquirer.prompt([{
        type: "list",
        message: "Let's add a new Employee! What is their role?",
        name: "employee",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
      }]).then(function (userInput) {
        switch(userInput.employee) {
          case "Manager":
            manager();
            break;
          case "Engineer":
            engineer();
            break;
          case "Intern":
            intern();
            break;
          default:
            htmlBuilder();
        }
      })
    }
}


function manager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerNumber",
        message: "What is the manager's office number?"
      }
  
    ]).then(data => {
      const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerNumber);
      team.push(manager);
      buildTeam();
    });

    function engineer() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
          },
    
          {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's employee ID number?" 
          },
    
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?"
          },
    
          {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?"
          }
    
        ]).then(data => {
          const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
          team.push(engineer);
          buildTeam();
        });
    
      }
    
      function intern() {
        inquirer.prompt([
          
          {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
          },
    
          {
            type: "input",
            name: "internId",
            message: "What is the intern's employee ID number?" 
          },
    
          {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?"
          },
    
          {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend?"
          }
    
        ]).then(data => {
          const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
          team.push(intern);
          buildTeam();
        });
    
      }
  
      function buildSite () {
        //TODO: throw 'team' into the output file 
    
    }

    buildTeam();
  }

run();
