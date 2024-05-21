import { Request, Response } from 'express';

import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    console.log(productData);

    const result = await ProductServices.createProductIntoDB(productData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllStudents,
};
