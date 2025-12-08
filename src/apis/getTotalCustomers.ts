import supabase from "../../supabase-client";

const { count } = await supabase
  .from("users")
  .select("*", { count: "exact", head: true });

const usersCount = count;
export default usersCount;