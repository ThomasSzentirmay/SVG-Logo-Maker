class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    draw() {
        throw new Error('draw() method must be implemented in the derived class');
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    draw(text) {
        const radius = 100;
        const fontSize = 24;
        const textY = 95 + fontSize / 2; // Center vertically by adding half of the font size to the y coordinate

        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <circle cx="150" cy="100" r="${radius}" fill="${this.shapeColor}" />
                <text x="150" y="${textY}" text-anchor="middle" fill="${text.color}" font-family="Arial, sans-serif" font-size="${fontSize}">${text.content}</text>
              </svg>`;
    }
}

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    draw(text) {
        const sideLength = 173.21;
        const height = 200;
        const base = (sideLength / 2).toFixed(2);
        const fontSize = 24;
        const textY = 95 + fontSize / 2; // Center vertically by adding half of the font size to the y coordinate

        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <polygon points="150,0 ${base},${height} ${300 - base},${height}" fill="${this.shapeColor}" />
                <text x="150" y="${textY}" text-anchor="middle" fill="${text.color}" font-family="Arial, sans-serif" font-size="${fontSize}">${text.content}</text>
              </svg>`;
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    draw(text) {
        const fontSize = 24;
        const textY = 95 + fontSize / 2; // Center vertically by adding half of the font size to the y coordinate

        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
                <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
                <text x="150" y="${textY}" text-anchor="middle" fill="${text.color}" font-family="Arial, sans-serif" font-size="${fontSize}">${text.content}</text>
              </svg>`;
    }
}

module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
};
