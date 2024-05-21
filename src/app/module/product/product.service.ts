import { Product } from './product.interface';
import ProductModel from './product.model';

const createProductIntoDB = async (ProductData: Product) => {
  const result = await ProductModel.create(ProductData);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};
