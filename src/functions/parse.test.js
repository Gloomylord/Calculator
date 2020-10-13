const parse = require('./parse');

test('adds 1 + 2 to equal 3', () => {
    expect(parse('1+2')).toBe('3');
});

test('adds 3*2 to equal 6', () => {
    expect(parse('3*2')).toBe('6');
});

test('adds 3*2+2+8/4 to equal 10', () => {
    expect(parse('3*2+2+8/4')).toBe('10');
});

test('adds 3*2+2+3/4 to equal 8.75', () => {
    expect(parse('3*2+2+3/4')).toBe('8.75');
});

test('adds 3*2*2*3/4 to equal 9', () => {
    expect(parse('3*2*2*3/4')).toBe('9');
});

test('adds 3-4 to equal -1', () => {
    expect(parse('3-4')).toBe('-1');
});