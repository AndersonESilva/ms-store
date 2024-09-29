class Price {
    constructor(value) {
      if (value <= 0) {
        throw new Error('Price must be greater than 0');
      }
      this.value = value;
    }
}
  
module.exports = Price;
  