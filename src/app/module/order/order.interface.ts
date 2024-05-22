import mongoose from 'mongoose';

export type Order = {
  email: string;
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
};
