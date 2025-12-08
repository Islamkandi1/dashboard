import supabase from "../../supabase-client";

const { count } = await supabase
  .from("orders")
  .select("*", { count: "exact", head: true });
    const ordersCount  = count

export default ordersCount;
