const { TestScheduler } = require('jest');
const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    // Our tests will be added here.
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2,4);
        expect(result).toBe(8);
    });

    test("should multiply a positive and a negative integer correctly", ()=> {
        const result = multiply(-2,4);
        expect(result).toBe(-8);
    })
  }); 