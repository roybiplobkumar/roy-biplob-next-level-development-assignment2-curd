import { Request, Response, request } from 'express';

import { OrderService } from './order.service';
import { orderSchemaZodValidation } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = orderSchemaZodValidation.parse(req.body);
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
  if (req.query.email) {
    try {
      const email = req.query.email;
      console.log(email);
      const orders = await OrderService.getOrderByEmailDB(email as string);
      if (!orders) {
        res.status(400).json({
          success: false,
          message: 'plz give vaild email',
        });
      }

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
  } else {
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
  }
};

export const orderControler = {
  createOrder,
  gelAllOrder,
};
