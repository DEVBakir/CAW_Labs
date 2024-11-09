
const exf = require('./exf_Function'); 
const mean = require('./mean_function')
console.log = jest.fn();

test('exf logs the string correct number of times', () => {
    exf("Hello", 3);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith("Hello");
});

// Test the mean function

test('mean calculates the correct average', () => {
    expect(mean([1, 2, 3, 4, 5])).toBe("3.00");
    expect(mean([10, 20, 30])).toBe("20.00");
    expect(mean([5, 5, 5, 5])).toBe("5.00");
    expect(mean([0, 0, 0, 0])).toBe("0.00");
});
