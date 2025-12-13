import supabase from "../../supabase-client";

async function getTotalCustomers() {
  const { count } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true });

  return count;
}
export default getTotalCustomers;
