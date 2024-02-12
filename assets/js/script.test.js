const { sum, calculateBMI } = require('./script');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('verifies that calculation is accurate', () => {
    let f = 5;
    let i = 7;
    let w = 175;
    expect(calculateBMI(f, i, w)).toEqual(27);
});