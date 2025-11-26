import supabase from "../../supabase-client";

async function deleteProduct(id: number) {
  const { data } = await supabase.from("products").delete().eq("id", id);
  return data;
}
export default deleteProduct;
