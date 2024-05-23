import { Request, Response } from 'express';

import { ProductServices } from './product.service';
import mongoose from 'mongoose';
import { ProductSchema } from './validationSchemas';

// create product

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = ProductSchema.parse(req.body);

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

// get all Product
const getAllProduct = async (req: Request, res: Response) => {
  if (req.query.searchTerm) {
    try {
      const { searchTerm } = req.query;

      if (!searchTerm) {
        return res.status(400).json({
          success: false,
          message: 'Search term is required',
        });
      }

      const result = await ProductServices.searchProductsFromDB(
        searchTerm as string,
      );
      if (!result) {
        res.status(400).json({
          success: false,
          message: 'plz give vaild searchTerm ',
        });
      }
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while searching for products',
        error: error,
      });
    }
  }

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
//get singleProduct
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const objectId = new mongoose.Types.ObjectId(id);

    const result = await ProductServices.getSingleProductsFromDB(objectId);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Product not found',
      });
    }

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

// upate single product
const updateSingleProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const { productId } = req.params;

  if (!productId) {
    return res.status(400).json({
      success: false,
      message: 'Product ID is required',
    });
  }

  if (!productData || Object.keys(productData).length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Product data is required',
    });
  }

  try {
    const result = await ProductServices.updateSingleProductIntoDB(
      productId,
      productData,
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

//delete single product

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteSingleProductIntoDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
