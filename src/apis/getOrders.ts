import supabase from "../../supabase-client";

export async function getOrders() {
     const {data,error} = await  supabase.from("orders").select("*");
     return {data,error};
}