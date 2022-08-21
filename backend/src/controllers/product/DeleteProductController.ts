import {Request, Response} from 'express'
import { DeleteProductService } from '../../services/product/DeleteProductService'

class DeleteProductController{
  async handle(req: Request, res: Response){
    const { id } = req.params;

    const deleteProductService = new DeleteProductService();

    const product = await deleteProductService.execute({
      id
    })

    return res.json(product);

  }
}

export { DeleteProductController }