import supabase from "../../supabase-client";

const { data} = await supabase
  .from("orders")
  .select("total");

const totalRevenue = data?.reduce((sum, item) => sum + item.total, 0) || 0;
export default totalRevenue;
