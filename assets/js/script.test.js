var { sum, calculateBMI } = require('./script');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('verifies that calculation is accurate', () => {
    let feet = 5;
    let inches = 7;
    let weight = 175;
    expect(calculateBMI(feet, inches, weight)).toBeCloseTo(27);
});

//remember to un-comment the module.exports line in script.js