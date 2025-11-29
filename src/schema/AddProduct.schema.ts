import { z } from "zod";
export const AddProductSchema = z.object({
  productName: z
    .string()
    .nonempty("productName is required")
    .min(3, "productName must be at least 3 characters long")
    .max(200, "productName must be  200 characters long"),
  price: z.string().nonempty("price is required"),
  category: z.string().nonempty("Category is required"),
  subcategory: z.string().nonempty("subcategory is required"),
  brand: z.string().nonempty("brand is required"),
  Quantity: z.string().nonempty("Quantity is required"),
  Colors: z.string().nonempty("colors are required"),
  description: z.string().nonempty("description is requird"),
});

export type AddProductFormType = z.infer<typeof AddProductSchema>;
