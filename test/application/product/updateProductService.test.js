const UpdateProductService = require('../../../src/application/services/product/UpdateProductService');
const Product = require('../../../src/domain/entities/Product');
const Price = require('../../../src/domain/valueObjects/Price');

describe('UpdateProductService', () => {
  let updateProductService;
  let mockProductRepository;

  beforeEach(() => {
    mockProductRepository = {
      update: jest.fn(),
      findById: jest.fn(),
    };

    updateProductService = new UpdateProductService(mockProductRepository);
  });

  test('should update a product successfully', async () => {
    const productId = '123';
    const updatedProductData = {
      id: productId,
      name: 'Updated Product',
      description: 'Updated Description',
      price: 100,
    };

    mockProductRepository.update.mockResolvedValue([1]);
    mockProductRepository.findById.mockResolvedValue(updatedProductData); 

    const result = await updateProductService.execute({
      id: productId,
      name: updatedProductData.name,
      description: updatedProductData.description,
      price: updatedProductData.price,
    });

    expect(mockProductRepository.update).toHaveBeenCalledWith(productId, {
      name: updatedProductData.name,
      description: updatedProductData.description,
      price: new Price(updatedProductData.price).value,
    });

    expect(result).toBeInstanceOf(Product);
    expect(result).toEqual(new Product(
      updatedProductData.id,
      updatedProductData.name,
      updatedProductData.description,
      updatedProductData.price,
    ));
  });

  test('should return an empty object when no product is found to update', async () => {
    const productId = '123';

    mockProductRepository.update.mockResolvedValue([0]);

    const result = await updateProductService.execute({
      id: productId,
      name: 'Non-existing Product',
      description: 'This should not exist',
      price: 100,
    });

    expect(mockProductRepository.update).toHaveBeenCalledWith(productId, {
      name: 'Non-existing Product',
      description: 'This should not exist',
      price: new Price(100).value,
    });

    expect(result).toEqual({});
  });
});
