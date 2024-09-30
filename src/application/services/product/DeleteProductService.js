const Product = require('../../../domain/entities/Product');

class DeleteProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }
  
  async execute(id) {
    const result = await this.productRepository.delete(id);

    if (result === 0) {
        return {
            message: 'Nenhum usuário encontrado para deletar.'
        }
    } else {
        return {
            message: 'Usuário deletado com sucesso!'
        }
    }
  }
}
  
module.exports = DeleteProductService;
  