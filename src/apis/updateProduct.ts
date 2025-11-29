import supabase from "../../supabase-client";
import type { AddProductFormType } from "../schema/AddProduct.schema";
import type { Product2 } from "../types/products.type";
import uploadImage from "./uploadImage";

// edite product================================================================
async function edite(
  id: number,
  values: AddProductFormType,
  file: File | null,
  editingProduct: Product2
) {
  console.log(id,values);
  
  let imageUrl: string | null | undefined = editingProduct?.image;
  if (file) {
    imageUrl = (await uploadImage(file)) || editingProduct?.image;
  }
  const { data,error } = await supabase
    .from("products")
    .update({ ...values, image: imageUrl })
    .eq("id", id).select()
    if(error){
      throw error
    }
  return data;
}

export default edite;
