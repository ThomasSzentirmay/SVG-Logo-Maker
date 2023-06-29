const inquirer = require('inquirer');

inquirer.prompt(
    {
        message: 'Please enter 3 characters:',
        name: 'characters'
    },
    {
        message: 'Please enter the text color (name or hexadecimal):',
        name: 'text-color'
    },
    {
        type: 'list',
        message: 'Please choose logo shape:',
        choices: ['Circle', 'Triangle', 'Square'],
        name: 'shape'
    },
    {
        message: 'Please enter the shape color (name or hexadecimal):',
        name: 'shape-color'
    }
)