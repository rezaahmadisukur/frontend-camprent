import * as z from "zod";

export const CreateProductSchema = z.object({
  name: z.string().trim().min(1, { message: "Product name is required" }),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  price: z.coerce
    .number()
    .min(1000, { message: "Price must be at least 1000" }),
  stock: z.coerce
    .number()
    .int({ message: "Stock must be an integer" })
    .min(0, { message: "Stock cannot be negative" }),
  categoryId: z.string().min(1, { message: "Category is required" })
});

export type TCreateProductSchema = z.infer<typeof CreateProductSchema>;
