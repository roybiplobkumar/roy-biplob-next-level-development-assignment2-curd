import { z } from 'zod';

export const VariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

export const InventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});
