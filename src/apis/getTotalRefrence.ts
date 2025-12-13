import supabase from "../../supabase-client";
async function getTotalRevenue() {
  
  const { data} = await supabase
    .from("orders")
    .select("total");
  const totalRevenue = data?.reduce((sum, item) => sum + item.total, 0) || 0;
  return totalRevenue
}
export default getTotalRevenue;
