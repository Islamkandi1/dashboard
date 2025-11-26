import { zodResolver } from "@hookform/resolvers/zod";
import { AddProductSchema, type AddProductFormType } from "../../schema/AddProduct.schema";
import type { ProductFormProps } from "../../types/productForm.type";
import { useForm } from "react-hook-form";
import supabase from '../../../supabase-client';
import toast from "react-hot-toast";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { useMutation, useQueryClient } from "@tanstack/react-query";



const ProductForm = ({ cancel, editingProduct, setShowForm }: ProductFormProps) => {
  const [file, setFile] = useState<File | null>(null);
  const queryClient = useQueryClient();
  let update: boolean = false
  // handle form===============================================================
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
      subcategory: editingProduct ? editingProduct.subcategory : "",
      brand: editingProduct ? editingProduct.brand : "",
      Quantity: editingProduct ? String(editingProduct.Quantity) : "",
      Colors: editingProduct ? editingProduct.Colors : "",
      description: editingProduct ? editingProduct.description : "",
    },
    mode: "onTouched",
    resolver: zodResolver(AddProductSchema),
  })

  // submit====================================================================
  async function submit(values: AddProductFormType) {
    if (editingProduct) {
      await edite(editingProduct.id, values)
    } else {
      await AddProduct(values)
    }
  }
  // handle add & update cashing===============================================
  const { mutate, isPending } = useMutation({
    mutationFn: submit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      if (update) {
        toast.success('product updated Successfully!')
        setShowForm(false)
      } else {
        toast.success('product add Successfully!')
      }
      reset()
      setFile(null)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })
  // AddProduct=================================================================
  async function AddProduct(values: AddProductFormType) {
    update = false
    let imageUrl: string | null = "";
    if (file) {
      imageUrl = await uploadImage(file) || null;
    }
    const { data } = await supabase.from("products").insert({ ...values, image: imageUrl }).select()
    return data
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
    update = true
    let imageUrl: string | null | undefined = editingProduct?.image;
    if (file) {
      imageUrl = await uploadImage(file) || editingProduct?.image;
    }
    const { data } = await supabase.from("products").update({ ...values, image: imageUrl }).eq("id", id)
    return data
  }




  return (
    <form onSubmit={handleSubmit((data) => mutate(data))} className="bg-white rounded-lg shadow p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Name */}
        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            {...register("productName")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"

          />
          {errors.productName && touchedFields.productName && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.productName.message}</p>}

        </section>
        {/* Price */}
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
      {/* Category */}
        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select {...register("category")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
          </select>

          {errors.category && touchedFields.category && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.category.message}</p>}
        </section>
        {/* subcategory */}
        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
          <select {...register("subcategory")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="shirts">shirts</option>
            <option value="shoes">shoes</option>
            <option value="pants">pants</option>
          </select>

          {errors.category && touchedFields.category && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.category.message}</p>}
        </section>
        {/* Quantity */}
        <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register("Quantity")}
          />
          {errors.Quantity && touchedFields.Quantity && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.Quantity.message}</p>}
        </section>
      {/* colors */}
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
        {/* brand */}
           <section>
          <label className="block text-sm font-medium text-gray-700 mb-2">brands</label>
          <select {...register("brand")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="adidas">Adidas</option>
            <option value="nike">Nike</option>
            <option value="Calvin Klein">Calvin Klein</option>
            <option value="Gucci">Gucci</option>
          </select>

          {errors.category && touchedFields.category && <p className="bg-red-300 text-red-800 capitalize rounded-lg px-4 py-1 mt-2">{errors.category.message}</p>}
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
          {isPending ? <BeatLoader
            color="#fff"
            size={10}
          /> : "Edite"}
        </button> : <button type="submit" className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {isPending ? <BeatLoader
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