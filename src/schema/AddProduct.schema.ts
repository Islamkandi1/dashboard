import { z } from "zod";
export const AddProductSchema = z
  .object({
    productName: z
      .string()
      .nonempty("productName is required")
      .min(3, "productName must be at least 3 characters long")
      .max(20, "productName must be at most 20 characters long"),
    price: z.string().nonempty("price is required"),
    category: z.string().nonempty("Category is required"),
    Quantity: z
      .string()
      .nonempty("Quantity is required"),
      Colors:z
      .string()
      .nonempty("colors are required"),
      description:z
      .string()
      .nonempty("description is requird"),
  })
;

export type AddProductFormType = z.infer<typeof AddProductSchema>;
