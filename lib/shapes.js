class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }

    draw() {
        throw new Error('draw() method must be implemented in the derived class');
    }
}

class Circle extends Shape {
    constructor(shapeColor, radius) {
        super(shapeColor);
        this.radius = radius;
    }

    draw() {
        // Generate SVG for a circle shape
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${this.radius * 2}" height="${this.radius * 2}">
                <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.shapeColor}" />
              </svg>`;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, sideLength) {
        super(shapeColor);
        this.sideLength = sideLength;
    }

    draw() {
        // Generate SVG for a triangle shape
        const height = (Math.sqrt(3) / 2) * this.sideLength;
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${this.sideLength}" height="${height}">
                <polygon points="0,${height} ${this.sideLength / 2},0 ${this.sideLength},${height}" fill="${this.shapeColor}" />
              </svg>`;
    }
}

class Square extends Shape {
    constructor(shapeColor, sideLength) {
        super(shapeColor);
        this.sideLength = sideLength;
    }

    draw() {
        // Generate SVG for a square shape
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${this.sideLength}" height="${this.sideLength}">
                <rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="${this.shapeColor}" />
              </svg>`;
    }
}


module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
};