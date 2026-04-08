import * as z from "zod";

export const CreateCategorySchema = z.object({
  name: z.string().min(1, { message: "Category name is required" })
});

export type TCreateCategorySchema = z.infer<typeof CreateCategorySchema>;
