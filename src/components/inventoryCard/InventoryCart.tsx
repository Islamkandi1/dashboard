import toast from "react-hot-toast";
import supabase from "../../../supabase-client";
import type { Product2 } from "../../types/products.type";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const InventoryCart = ({ product }: { product: Product2 }) => {
  const [editeId, setEditeId] = useState<number | null>(null)

  const queryClient = useQueryClient();

  // edite Quantity===============================================
  async function editeQuantity({ id, change }: { id: number; change: number }) {
    setEditeId(id)
    let newQuantity = product.Quantity + change
    if (newQuantity < 0) {
      newQuantity = 0
    }
    const { error } = await supabase.from("products").update({ Quantity: newQuantity }).eq("id", id)
    if (error) {
      toast.error(error.message)
    }
    setEditeId(null)
  }

  const { mutate } = useMutation({
    mutationFn: editeQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success('product updated Successfully!')

    },
    onError: (error) => {
      toast.error(error.message)
    }
  })



  return (
    <>
      <tr key={product.id} className="border-b relative hover:bg-gray-50">
        <td className="p-3 font-medium text-left">{product.productName}</td>
        <td className="p-3 text-center">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">{product.category}</span></td>
        <td className="p-3 font-bold text-lg text-center">{product.Quantity}</td>
        <td className="p-3 text-center">
          <span
            className={`px-2 py-1 rounded text-sm ${product.Quantity === 0
              ? "bg-red-100 text-red-800"
              : product.Quantity < 10
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
              }`}
          >
            {product.Quantity === 0
              ? "Out of Stock"
              : product.Quantity < 10
                ? "Low Stock"
                : "In Stock"}
          </span>
        </td>
        <td className="p-3">
          <section className="flex justify-center gap-2">
            <button
              onClick={() => mutate({ id: product.id, change: -1 })}
              className="px-3 py-1 bg-red-100 cursor-pointer text-red-600 rounded hover:bg-red-200 transition"
            >
              -1
            </button>
            <button
              onClick={() => mutate({ id: product.id, change: -10 })}
              className="px-3 py-1 bg-red-100 cursor-pointer text-red-600 rounded hover:bg-red-200 transition"
            >
              -10
            </button>
            <button
              onClick={() => mutate({ id: product.id, change: 1 })}
              className="px-3 py-1 bg-green-100 cursor-pointer text-green-600 rounded hover:bg-green-200 transition"
            >
              +1
            </button>
            <button
              onClick={() => mutate({ id: product.id, change: 10 })}
              className="px-3 py-1 bg-green-100 cursor-pointer text-green-600 rounded hover:bg-green-200 transition"
            >
              +10
            </button>
          </section>
        </td>
        {editeId == product.id && <section className="absolute top-0 right-0 left-0 bottom-0 bg-gray-400/40 flex justify-center items-center">
          <section>
            <BeatLoader
              color="#155DFC"
              size={15}
            />
          </section>
        </section>}

      </tr>
    </>
  );
};

export default InventoryCart;
