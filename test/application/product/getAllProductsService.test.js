const GetAllProductsService = require('../../../src/application/services/product/GetAllProductsService');
const Product = require('../../../src/domain/entities/Product');

describe('GetAllProductsService', () => {
  let productRepositoryMock;
  let getAllProductsService;

  beforeEach(() => {
    productRepositoryMock = {
      findAll: jest.fn(),
    };

    getAllProductsService = new GetAllProductsService(productRepositoryMock);
  });

  test('should return a list of products', async () => {
    const mockProductsData = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
    ];

    productRepositoryMock.findAll.mockResolvedValue(mockProductsData);

    const result = await getAllProductsService.execute();

    expect(result).toHaveLength(mockProductsData.length);
    expect(result[0]).toBeInstanceOf(Product);
    expect(result[0].id).toBe(mockProductsData[0].id);
    expect(result[0].name).toBe(mockProductsData[0].name);
    expect(result[0].description).toBe(mockProductsData[0].description);
    expect(result[0].price).toBe(mockProductsData[0].price);

    expect(result[1]).toBeInstanceOf(Product);
    expect(result[1].id).toBe(mockProductsData[1].id);
    expect(result[1].name).toBe(mockProductsData[1].name);
    expect(result[1].description).toBe(mockProductsData[1].description);
    expect(result[1].price).toBe(mockProductsData[1].price);
  });
});
