"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const VariantSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
const InventorySchema = new mongoose_1.default.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
const ProductSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    variants: [VariantSchema],
    inventory: InventorySchema,
});
const ProductModel = mongoose_1.default.model('Product', ProductSchema);
exports.default = ProductModel;
