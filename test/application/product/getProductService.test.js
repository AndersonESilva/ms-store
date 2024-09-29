const GetProductService = require('../../../src/application/services/product/GetProductService');
const Product = require('../../../src/domain/entities/Product');

describe('GetProductService', () => {
  let productRepositoryMock;
  let getProductService;

  beforeEach(() => {
    productRepositoryMock = {
      findById: jest.fn(),
    };

    getProductService = new GetProductService(productRepositoryMock);
  });

  test('should return a product when found', async () => {
    const mockProductData = {
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price: 100,
    };

    productRepositoryMock.findById.mockResolvedValue(mockProductData);

    const result = await getProductService.execute(1);

    expect(result).toBeInstanceOf(Product);
    expect(result.id).toBe(mockProductData.id);
    expect(result.name).toBe(mockProductData.name);
    expect(result.description).toBe(mockProductData.description);
    expect(result.price).toBe(mockProductData.price);
  });

  test('should return an empty object when product not found', async () => {
    productRepositoryMock.findById.mockResolvedValue(null);

    const result = await getProductService.execute(999); 

    expect(result).toEqual({});
  });
});
