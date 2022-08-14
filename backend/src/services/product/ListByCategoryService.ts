import prismaClient from "../../prisma";

interface ProductRequest{
  category_id: string;
}

class ListByCategoryService{
  async execute({ category_id }: ProductRequest){
    
    const findByCategory = await prismaClient.product.findMany({
      where:{
        category_id: category_id
      },
      orderBy:{
        created_at: 'desc'
      }
    })

    return findByCategory;

  }
}

export { ListByCategoryService }