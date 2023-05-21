// Bringing in fs, and inquirer package
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// set teamArray to an empty array
let teamArray = [];

// Call this function to initilize promps and run program
addNewMember();

// Promp function to add new member
function addNewMember() {
    const userPrompts = [
        {
            type: 'list',
            name: 'member',
            message: 'Which team member would you like to add? ',
            choices: ['Manager', 'Engineer', 'Intern', 'Done'],
        },
    ]

inquirer.prompt(userPrompts)
    .then(res => {
        switch(res.member) {
            case 'Manager':
                managerPromt();
                break;

            case 'Intern':
                internPromt();
                break;

            case 'Engineer':
                engineerPromt();
                break;

            case 'Done':
                generateHtml();
                break;
        }
    }) 
};

// Promp function to add new manager
const managerPromt = () => {
    const managerPrompts = [
        {
            type: 'input',
            name: 'id',
            message: 'managers ID number?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'managers name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'managers email?',
        },
        {
            type: 'input',
            name: 'info',
            message: 'What is the managers office #?',
        },
    ]

    inquirer.prompt(managerPrompts)
        .then(res => {
            const newManager = new Manager(res.id, res.name, res.email, res.info);
            teamArray.push(newManager);
            addNewMember();
        })
};

// Promp function to add new intern
const internPromt = () => {
    const internPrompts = [
        {
            type: 'input',
            name: 'id',
            message: 'interns ID number?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'interns name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'interns email?',
        },
        {
            type: 'input',
            name: 'info',
            message: 'Where does the intern go to school currently?',
        },
    ]

    inquirer.prompt(internPrompts)
        .then(res => {
            const newIntern = new Intern(res.id, res.name, res.email, res.info);
            teamArray.push(newIntern);
            addNewMember();
        })
};

// Promp function to add new engineer
const engineerPromt = () => {
    const engineerPrompts = [
        {
            type: 'input',
            name: 'id',
            message: 'engineers ID number?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'engineers name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'engineers email?',
        },
        {
            type: 'input',
            name: 'info',
            message: 'engineers github username?',
        },
    ]

    inquirer.prompt(engineerPrompts)
        .then(res => {
            const newEngineer = new Engineer(res.id, res.name, res.email, `https://github.com/${res.info}`);
            teamArray.push(newEngineer);
            addNewMember();
        })
};

// Generate new html page
function generateHtml() {
    let html = `
<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Employees</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
            <style>
                .card {
                    background-color: blue;
                    color: white;
                    width: 12rem;
                    height: 18rem;
                }
            </style>
        </head>
        <body>
            <header class="text-center">
                <h1>My Employees</h1>
            </header>
            <main>
                <div class="container d-flex justify-content-center">
                    <div class="row">
    `;

    for (let i = 0; i < teamArray.length; i++) {
        html += `
                        <div class="col-md-4 card">
                            <h2><b>Name:</b> ${teamArray[i].name}</h2>
                            <h3>${teamArray[i].getRole()}</h3>
                            <p><b>ID:</b> ${teamArray[i].id}</p>
                            <p><b>Email:</b> ${teamArray[i].email}</p>
                            <p><b>Info:</b> ${teamArray[i].info}</p>
                        </div>
        `;
    }

    html += `
                    </div>
                </div>
            </main>
        </body>
    </html>
`;
    fs.writeFile('./dist/index.html', html, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('HTML file with employees created!');
        }
    });
}
