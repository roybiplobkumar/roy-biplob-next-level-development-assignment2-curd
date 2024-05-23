import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/api/products', ProductControllers.createProduct);
router.get('/api/products', ProductControllers.getAllProduct);
router.get('/api/products/:productId', ProductControllers.getSingleProduct);
router.put('/api/products/:productId', ProductControllers.updateSingleProduct);
router.delete(
  '/api/products/:productId',
  ProductControllers.deleteSingleProduct,
);

router.get('/api/products/p', ProductControllers.searchProducts);

export const ProductRoutes = router;
