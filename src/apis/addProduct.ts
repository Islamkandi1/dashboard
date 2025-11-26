import supabase from "../../supabase-client";
import type { AddProductFormType } from "../schema/AddProduct.schema";
import uploadImage from "./uploadImage";

// AddProduct=================================================================
async function AddProduct(values: AddProductFormType, file: File | null) {
  let imageUrl: string | null = "";
  if (file) {
    imageUrl = (await uploadImage(file)) || null;
  }
  const { data } = await supabase
    .from("products")
    .insert({ ...values, image: imageUrl })
    .select();
  return data;
}
export default AddProduct;
