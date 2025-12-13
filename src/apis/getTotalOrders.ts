import supabase from "../../supabase-client";
async function getTotalOrders() {
  const { count } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true });
  return count
}
export default getTotalOrders