import express from 'express';
import { orderControler } from './order.controler';

const router = express.Router();
router.post('/api/orders', orderControler.createOrder);
router.get('/api/orders', orderControler.gelAllOrder);
router.get('/api/orders/email', orderControler.retrieveOrderByEmail);

export const OrderRouter = router;
