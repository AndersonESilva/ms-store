const CreateProductService = require('../../../src/application/services/product/CreateProductService');
const Product = require('../../../src/domain/entities/Product');
const Price = require('../../../src/domain/valueObjects/Price');

describe('CreateProductService', () => {
    let createProductService;
    let mockProductRepository;
  
    beforeEach(() => {
      mockProductRepository = {
        create: jest.fn(),
      };
  
      createProductService = new CreateProductService(mockProductRepository);
    });
  
    test('should successfully create a product', async () => {
      const productInput = {
        name: 'Produto 1',
        description: 'Descrição do produto 1',
        price: 100,
      };
  
      const productFromRepo = {
        id: '123',
        name: productInput.name,
        description: productInput.description,
        price: productInput.price,
      };
  
      mockProductRepository.create.mockResolvedValue(productFromRepo);
  
      const result = await createProductService.execute(productInput);
  
      expect(mockProductRepository.create).toHaveBeenCalledWith({
        name: productInput.name,
        description: productInput.description,
        price: new Price(productInput.price).value,
      });
  
      expect(result).toBeInstanceOf(Product);
      expect(result.id).toBe(productFromRepo.id);
      expect(result.name).toBe(productFromRepo.name);
      expect(result.description).toBe(productFromRepo.description);
      expect(result.price).toBe(productFromRepo.price);
    });
  
    test('should throw an error if the price is invalid', async () => {
      const invalidInput = {
        name: 'Produto 2',
        description: 'Descrição do produto 2',
        price: 0, 
      };
  
      await expect(createProductService.execute(invalidInput)).rejects.toThrow('Price must be greater than 0');
    });
});
