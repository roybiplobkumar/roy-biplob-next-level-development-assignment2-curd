"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControler = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.OrderService.createOrderIntoDB(orderData);
        // Send a success response with the created order
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: orderData
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
});
const gelAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.getAllOrderIntoDB();
        console.log("order is", result);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Orders fetched faild",
            error: error
        });
    }
});
exports.orderControler = {
    createOrder,
    gelAllOrder
};
