const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {

  it('Should pritn a error message if the arrgument is not a number', () => {
    const expected = 'Error: the arrgument must be a number';
    const result = fizzbuzz('30');
    expect(result).toBe(expected)
  });

  it('Should print 1 if they recive 1', () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(result).toBe(expected);
  });

  it('Should print "fizz" if they recive 3', () => {
    const expected = "fizz";
    const result = fizzbuzz(3);
    expect(result).toBe(expected);
  });

  it('Should print "fizz" if they recive a multiple of 3', () => {
    const expected = "fizz";
    const result = fizzbuzz(6);
    expect(result).toBe(expected);
  });

  it('Should print "buzz" if they recive 5', () => {
    const expected = "buzz";
    const result = fizzbuzz(5);
    expect(result).toBe(expected);
  });

  it('Should print "buzz" if they recive a multiple of 5', () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(result).toBe(expected);
  });

  it('Should print "fizzbuzz" it recive a multiple of 3 and 5', () => {
    const expected = 'fizzbuzz';
    const result = fizzbuzz(15);
    expect(result).toBe(expected);
  });

});


// it('', () => {});
