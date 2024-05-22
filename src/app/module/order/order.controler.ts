import { Request, Response } from 'express';
import { Order } from './order.interface';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData: Order = req.body;
    const result = await OrderService.createOrderIntoDB(orderData);

    // Send a success response with the created order
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: orderData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

const gelAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrderIntoDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Orders fetch failed',
      error: error,
    });
  }
};

const retrieveOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    // Retrieve orders from the database for the specified email
    const orders = await OrderService.getOrderByEmailDB(email);

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to fetch orders for user email',
      error: error,
    });
  }
};

export const orderControler = {
  createOrder,
  gelAllOrder,
  retrieveOrderByEmail,
};
