import supabase from "../../supabase-client";


async function getTotalProductsme() {
  
  const { count } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true });
  
  return count
}
export default getTotalProductsme