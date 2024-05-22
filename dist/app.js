"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./app/module/product/product.route");
const order_route_1 = require("./app/module/order/order.route");
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use('/', product_route_1.ProductRoutes);
app.use('/', order_route_1.OrderRouter);
app.get('/', (req, res) => {
    res.send('server is running');
});
exports.default = app;
