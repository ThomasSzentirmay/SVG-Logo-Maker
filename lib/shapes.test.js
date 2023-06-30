// PULL IN SHAPE CLASSES FROM SHAPES.JS
const { Circle, Triangle, Square } = require('../lib/shapes');

// TEST CIRCLE
describe('Logo Generation', () => {
    
    it('should generate SVG for Circle', () => {
      const shape = new Circle('red', 10);
      const svg = shape.draw();
  
      expect(svg).toContain('<circle');
      expect(svg).toContain('fill="red"');
    });
  
});

// TEST TRIANGLE
describe('Logo Generation', () => {
    
    it('should generate SVG for Triangle', () => {
      const shape = new Triangle('blue', 10);
      const svg = shape.draw();
  
      expect(svg).toContain('<polygon');
      expect(svg).toContain('fill="blue"');
    });
  
});

// TEST SQUARE
describe('Logo Generation', () => {
    
    it('should generate SVG for Square', () => {
      const shape = new Square('green', 10);
      const svg = shape.draw();
  
      expect(svg).toContain('<rect');
      expect(svg).toContain('fill="green"');
    });
  
});