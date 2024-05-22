"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/api/products', product_controller_1.ProductControllers.createProduct);
router.get('/api/products', product_controller_1.ProductControllers.getAllStudents);
router.get('/api/products/:productId', product_controller_1.ProductControllers.getSingleStudents);
router.put('/api/products/:productId', product_controller_1.ProductControllers.updateSingleProduct);
router.delete('/api/products/:productId', product_controller_1.ProductControllers.deleteSingleProduct);
router.get('api/products/search', product_controller_1.ProductControllers.searchProducts);
exports.ProductRoutes = router;
