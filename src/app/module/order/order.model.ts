import mongoose, { Schema, model } from 'mongoose';
import { Order } from './order.interface';

const OrderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderModel = model<Order>('Order', OrderSchema);
