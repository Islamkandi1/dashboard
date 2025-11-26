import supabase from "../../supabase-client";


  // get all products===============================================
  const getAllProducts = async (searchTerm: string, categoryFilter: string, priceFilter: string, stockFilter: string) => {
    let query = supabase.from("products").select("*");

    // Search by product name
    if (searchTerm.trim() !== "") {
      query = query.ilike("productName", `%${searchTerm}%`);
    }

    if (categoryFilter.trim() !== "") {
      query = query.eq("category", categoryFilter);
    }

    // Filter by price
    if (priceFilter === "low") {
      query = query.lt("price", 50);
    } else if (priceFilter === "Above $200") {
      query = query.gte("price", 200)
    } else if (priceFilter === "Under $50") {
      query = query.lte("price", 50);
    } else if (priceFilter === "$50 - $200") {
      query = query.gte("price", 50).lte("price", 200);
    } else {
      query = query.gte("price", 0)
    }
    // filter by Quantity
    if (stockFilter === "above") {
      query = query.gte("Quantity", 10);
    } else if (stockFilter === "low") {
      query = query.gt("Quantity", 0).lt("Quantity", 10);
    } else if (stockFilter === "out") {
      query = query.eq("Quantity", 0);
    }
    const { data } = await query;
    return data
  }
  export default  getAllProducts