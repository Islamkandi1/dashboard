import supabase from "../../supabase-client";

const { count } = await supabase
  .from("products")
  .select("*", { count: "exact", head: true });

const productsCount = count;
export default productsCount