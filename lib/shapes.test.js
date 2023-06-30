// PULL IN SHAPE CLASSES FROM SHAPES.JS
const { Circle, Triangle, Square } = require('../lib/shapes');

// TEST CIRCLE
describe('Logo Generation', () => {
    it('should generate SVG for Circle', () => {
        const shape = new Circle('red');
        const text = {
            color: 'white',
            content: 'Circle'
        };
        const svg = shape.draw(text);

        expect(svg).toContain('<circle');
        expect(svg).toContain('fill="red"');
        expect(svg).toContain('fill="white"');
        expect(svg).toContain('Circle');
    });
});

// TEST TRIANGLE
describe('Logo Generation', () => {
    it('should generate SVG for Triangle', () => {
        const shape = new Triangle('blue');
        const text = {
            color: 'white',
            content: 'Triangle'
        };
        const svg = shape.draw(text);

        expect(svg).toContain('<polygon');
        expect(svg).toContain('fill="blue"');
        expect(svg).toContain('fill="white"');
        expect(svg).toContain('Triangle');
    });
});

// TEST SQUARE
describe('Logo Generation', () => {
    it('should generate SVG for Square', () => {
        const shape = new Square('green');
        const text = {
            color: 'white',
            content: 'Square'
        };
        const svg = shape.draw(text);

        expect(svg).toContain('<rect');
        expect(svg).toContain('fill="green"');
        expect(svg).toContain('fill="white"');
        expect(svg).toContain('Square');
    });
});