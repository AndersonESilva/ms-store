const DeleteProductService = require('../../../src/application/services/product/DeleteProductService');

describe('DeleteProductService', () => {
  let deleteProductService;
  let mockProductRepository;

  beforeEach(() => {
    mockProductRepository = {
      delete: jest.fn(),
    };

    deleteProductService = new DeleteProductService(mockProductRepository);
  });

  test('should delete a product successfully', async () => {
    const productId = '123';

    mockProductRepository.delete.mockResolvedValue(1);

    const result = await deleteProductService.execute(productId);

    expect(mockProductRepository.delete).toHaveBeenCalledWith(productId);

    expect(result).toEqual({ message: 'Usuário deletado com sucesso!' });
  });

  test('should return a message when no product is found to delete', async () => {
    const productId = '123';

    mockProductRepository.delete.mockResolvedValue(0);

    const result = await deleteProductService.execute(productId);

    expect(mockProductRepository.delete).toHaveBeenCalledWith(productId);

    expect(result).toEqual({ message: 'Nenhum usuário encontrado para deletar.' });
  });
});
