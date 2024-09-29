const Price = require('../../src/domain/valueObjects/Price');

describe('Price Class', () => {
  test('should create a Price object when value is greater than 0', () => {
    const price = new Price(100);
    expect(price.value).toBe(100);
  });

  test('should throw an error when value is less than or equal to 0', () => {
    expect(() => new Price(0)).toThrow('Price must be greater than 0');
    expect(() => new Price(-50)).toThrow('Price must be greater than 0');
  });
});
