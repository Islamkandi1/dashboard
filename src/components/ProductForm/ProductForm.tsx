import { zodResolver } from "@hookform/resolvers/zod";
import { AddProductSchema, type AddProductFormType } from "../../schema/AddProduct.schema";
import type { ProductFormProps } from "../../types/productForm.type";
import { useForm } from "react-hook-form";
import supabase from '../../../supabase-client';
import toast from "react-hot-toast";
import { useState } from "react";
import { BeatLoader } from "react-spinners";



const ProductForm = ({ cancel, editingProduct }: ProductFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false)
  // handle form=============================================================
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset
  } = useForm<AddProductFormType>({
    defaultValues: {
      productName: editingProduct ? editingProduct.productName : "",
      price: editingProduct ? String(editingProduct.price) : "",
      category: editingProduct ? editingProduct.category : "",
      Quantity: editingProduct ? String(editingProduct.Quantity) : "",
      Colors: editingProduct ? editingProduct.Colors : "",
      description: editingProduct ? editingProduct.description : "",
    },
    mode: "onTouched",
    resolver: zodResolver(AddProductSchema),
  })

  // submit====================================================================
  function submit(values: AddProductFormType) {
    if (editingProduct) {
      console.log("done");
      edite(editingProduct.id, values)
    } else {
      AddProduct(values)
    }
  }

  // AddProduct=================================================================
  async function AddProduct(values: AddProductFormType) {
    setIsLoading(true)
    let imageUrl: string | null = "";
    if (file) {
      imageUrl = await uploadImage(file) || null;
    }
    const { error } = await supabase.from("products").insert({ ...values, image: imageUrl }).select()
    if (error) {
      toast.error(error.message)
    } else {
      toast.success('product add Successfully!')
      reset()
      setFile(null)
    }
    setIsLoading(false)
  }
  // handle uploade images=======================================================
  async function uploadImage(file: File) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fileName = `${Date.now()}_${file.name}`;
    const { error } = await supabase
      .storage
      .from('products')
      .upload(fileName, file);

    if (error) {
      console.log(error);
      return null;
    }

    const { data } = supabase
      .storage
      .from('products')
      .getPublicUrl(fileName);
    const publicUrl = data?.publicUrl ?? null;
    return publicUrl;
  }
  // edite product================================================================
  async function edite(id: number, values: AddProductFormType) {
    setIsLoading(true)
    let imageUrl: string | null | undefined = editingProduct?.image;
    if (file) {
      imageUrl = await uploadImage(file) || editingProduct?.image;
    }
    const { error } = await supabase.from("products").update({ ...values, image: imageUrl }).eq("id", id)
    if (error) {
      toast.error(error.message)
    } else {
      toast.success('product updated Successfully!')
    }
    setIsLoading(false)
  }




  return (
    <form onSubmit={handleSubmit(submit)} className="bg-white rounded-lg shadow p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            {...register("productName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"

          />
          {errors.productName && touchedFields.productName && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.productName.message}</p>}

        </section>

        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
          <input
            type="number"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register("price")}
          />
          {errors.price && touchedFields.price && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.price.message}</p>}
        </section>

        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select {...register("category")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
          </select>

          {errors.category && touchedFields.category && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.category.message}</p>}
        </section>


        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register("Quantity")}
          />
          {errors.Quantity && touchedFields.Quantity && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.Quantity.message}</p>}
        </section>

        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Colors (comma separated)</label>
          <input
            type="text"
            placeholder="Black, White, Red"
            {...register("Colors")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.Colors && touchedFields.Colors && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.Colors.message}</p>}
        </section>
      </section>

      <section>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          {...register("description")}
        />
        {errors.description && touchedFields.description && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.description.message}</p>}
      </section>

      <section>
        <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
        <input
          type="file"
          placeholder="url1.jpg, url2.jpg"
          onChange={(e) => setFile(e.target?.files?.[0] || null)}
          className="cursor-pointer w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

      </section>

      <section className="flex gap-3">
        {editingProduct ? <button type="submit" className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {isLoading ? <BeatLoader
            color="#fff"
            size={10}
          /> : "Edite"}
        </button> : <button type="submit" className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {isLoading ? <BeatLoader
            color="#fff"
            size={10}
          /> : "Add Product"}
        </button>}


        <button type="button" onClick={() => cancel()} className="cursor-pointer px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
          Cancel
        </button>
      </section>
    </form>
  );
};
export default ProductForm