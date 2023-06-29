const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const fs = require('fs');

inquirer.prompt([
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
]).then((answers) => {
    console.log('Your SVG Logo has been generated!');
    const shapeColor = answers['shape-color'];

    let shape;
    if (answers.shape === 'Circle') {
        shape = new Circle(shapeColor, /* other necessary parameters */);
    } else if (answers.shape === 'Triangle') {
        shape = new Triangle(shapeColor, /* other necessary parameters */);
    } else if (answers.shape === 'Square') {
        shape = new Square(shapeColor, /* other necessary parameters */);
    }

    // Generate the SVG logo using the selected shape
    const svgLogo = shape.draw();

    // Save the SVG to a file
    fs.writeFile('logo.svg', svgLogo, (err) => {
        if (err) {
            console.error('Failed to save SVG:', err);
        } else {
            console.log('SVG logo saved to logo.svg');
        }
    });
});