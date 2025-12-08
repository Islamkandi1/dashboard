import type { PostgrestError } from "@supabase/supabase-js";

export interface Order {
  data: OrderData[] | null;
  error: PostgrestError  | null;
}

export interface OrderData {
  created_at: string;
  id: number;
  customer: string;
  email: string;
  products: orderProducts[];
  total: number;
  userName: string;
  user_id: string;
}

export interface orderProducts {
  brand: string;
  category: string;
  created_at: string;
  id: number;
  image: string;
  price: number;
  productDescription: string;
  productName: string;
  quantity: number;
  user_id: string;
}
