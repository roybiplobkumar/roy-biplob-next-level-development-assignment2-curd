"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controler_1 = require("./order.controler");
const router = express_1.default.Router();
router.post('/api/orders', order_controler_1.orderControler.createOrder);
router.get('/api/orders', order_controler_1.orderControler.gelAllOrder);
exports.OrderRouter = router;
