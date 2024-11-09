const first = require('./first_function')
const last = require('./last_function')

const chunk = require('./chunk');

test('test first function', () => {
    expect(first([1, 2, 3], 1)).toStrictEqual([1]);      
    expect(first([1, 2, 3], null)).toStrictEqual([]);    
    expect(first([1, 2, 3], 2)).toStrictEqual([1, 2]);   
    expect(first([1, 2, 3], 0)).toStrictEqual([]);       
    expect(first([1, 2, 3], -1)).toStrictEqual([]);      
    expect(first([1, 2, 3])).toStrictEqual(1);           
});

  test('test last function', () => {
    expect(last([1, 2, 3, 4, 5], 1)).toStrictEqual([5]);
    expect(last([1, 2, 3, 4, 5], null)).toStrictEqual(5);
    expect(last([1, 2, 3, 4, 5], 2)).toStrictEqual([4, 5]);
    expect(last([1, 2, 3, 4, 5], 10)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(last([1, 2, 3, 4, 5])).toStrictEqual(5);
    expect(last([], 2)).toStrictEqual([]);
    expect(last(null, 2)).toStrictEqual([]);
});

  
test('concatenation of array elements with toString()', () => {
    const myColor = ["Red", "Green", "White", "Black"];
    expect(myColor.toString()).toBe("Red,Green,White,Black");
});

test('concatenation of array elements with join() (default separator)', () => {
    const myColor = ["Red", "Green", "White", "Black"];
    expect(myColor.join()).toBe("Red,Green,White,Black");
});

test('concatenation of array elements with join(\'\') (no separator)', () => {
    const myColor = ["Red", "Green", "White", "Black"];
    expect(myColor.join('')).toBe("RedGreenWhiteBlack");
});


test('splits an array into chunks of specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7]]);
});

test('returns the entire array as a single chunk if size is greater than array length', () => {
    expect(chunk([1, 2, 3], 5)).toStrictEqual([[1, 2, 3]]);
});

test('returns an empty array when given an empty array', () => {
    expect(chunk([], 2)).toStrictEqual([]);
});

test('splits array into single-element chunks when size is 1', () => {
    expect(chunk([1, 2, 3, 4], 1)).toStrictEqual([[1], [2], [3], [4]]);
});
