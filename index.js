const inquirer = require("inquirer");
const fs = require("fs");
const createTeam = require("./src/template.js")
// bring in the Class files
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//  all of the emplpyee info from the prompts gets pushed to this array
team = [];

function run () {
// asks for info via prompt
  function buildTeam () {
    inquirer.prompt([{
      type: "list",
      message: "Let's add a new Employee! What is their role?",
      name: "employee",
      choices: ["Manager", "Engineer", "Intern", "Done."]
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
          buildSite();
      }
    })
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
          message: "What is the manager's ID number?"
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
    }

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
            message: "What is the engineer's ID number?" 
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
            message: "What is the intern's ID number?" 
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
  // builds the finished html and writes it out to the dist directory
      function buildSite () {
        fs.writeFileSync('./dist/team.html', createTeam(team), "UTF-8")
    
    }

    buildTeam();
}

run();
