import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};
const getAllOrderIntoDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderByEmailDB = async (email: string) => {
  const result = await OrderModel.findOne({ email: email });
  return result;
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getOrderByEmailDB,
};
