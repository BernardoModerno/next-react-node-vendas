import prismaClient from "../../prisma";

class ListCategoryService{
  async execute(){

    const category = await prismaClient.category.findMany({
      select:{
        id: true,
        numerounico: true,
        name: true,
      }
    })

    return category;

  }
}

export { ListCategoryService }