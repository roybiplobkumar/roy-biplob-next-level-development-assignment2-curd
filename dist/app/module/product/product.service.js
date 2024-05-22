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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = __importDefault(require("./product.model"));
const createProductIntoDB = (ProductData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(ProductData);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find();
    return result;
});
const getSingleProductsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const objectId = new mongoose_1.default.Types.ObjectId(id);
    return yield product_model_1.default.findById(objectId);
});
const updateSingleProductIntoDB = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(id, productData);
    return result;
});
// deleted product
const deleteSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result;
});
// search item
const searchProductsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.default.find({
        $or: [
            { name: new RegExp(searchTerm, 'i') },
            { description: new RegExp(searchTerm, 'i') },
            { tags: new RegExp(searchTerm, 'i') }
        ]
    });
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    updateSingleProductIntoDB,
    deleteSingleProductIntoDB,
    searchProductsFromDB
};
