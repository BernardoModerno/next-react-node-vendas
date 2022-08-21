import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailuserController } from './controllers/user/DetailUserController'

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'

import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'

import { AddItemController } from './controllers/order/AddItemController'
import { RemoveItemController } from './controllers/order/RemoveItemController'
import { SendOrderController } from './controllers/order/SendOrderController'

import { ListOrdersController } from './controllers/order/ListOrdersController'
import { DetailOrderController } from './controllers/order/DetailOrderController'
import { FinishOrderController } from './controllers/order/FinishOrderController'
import { EditCategoryController } from './controllers/category/EditCategoryController';

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'
import { ListByIdCategoryController } from './controllers/category/ListByIdCategoryController';
import { DeleteCategoryController } from './controllers/category/DeleteCategoryController';
import { ListProductController } from './controllers/product/ListProductController';
import { EditProductController } from './controllers/product/EditProductController';
import { ListByIdProductController } from './controllers/product/ListByIdProductController';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailuserController().handle )

//-- ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle )

router.delete('/category/:id', isAuthenticated, new DeleteCategoryController().handle )

router.get('/category', isAuthenticated, new ListCategoryController().handle )

router.get('/category/:id', isAuthenticated, new ListByIdCategoryController().handle ) 

router.put('/category/:id', isAuthenticated, new EditCategoryController().handle ) 

//-- ROTAS PRODUCT
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle )

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )

router.get('/product', isAuthenticated, new ListProductController().handle )

router.put('/product/:id', isAuthenticated, upload.single('file'), new EditProductController().handle )

router.get('/product/:id', isAuthenticated, new ListByIdProductController().handle )


//-- ROTAS ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle )
router.delete('/order', isAuthenticated, new RemoveOrderController().handle )

router.post('/order/add', isAuthenticated, new AddItemController().handle )
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle )

router.put('/order/send', isAuthenticated, new SendOrderController().handle )

router.get('/orders', isAuthenticated, new ListOrdersController().handle )
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle )

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle )



export { router }; 