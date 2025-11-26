import { useState } from "react";
import { Plus, Search } from "lucide-react";
import ProductForm from "../../ProductForm/ProductForm";
import toast from "react-hot-toast";
import { type Products } from "../../../types/products.type";
import ProductCard from "../../productCard/ProductCard";
import Skeleton from "../../../loadings/Skeleton";
import { useQuery } from "@tanstack/react-query";
import getAllProducts from "../../../apis/productmanagment";
// Products Management Component
const ProductsManagement = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  // filter states=========================================
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [stockFilter, setStockFilter] = useState('');
  // data====================================================
  const [editingProduct, setEditingProduct] = useState<Products[0] | null>(null);
  // cashing data======================================================
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: ['products', searchTerm, categoryFilter, priceFilter, stockFilter],
      queryFn: () => getAllProducts(searchTerm, categoryFilter, priceFilter, stockFilter)
    }
  )

  // hide form===========================================================
  function cancel() {
    setShowForm(false)
  }

  // show form=================================================================
  function showAddForm() {
    setShowForm(true)
    setEditingProduct(null)
  }
  if (showForm) {
    return <ProductForm setShowForm={setShowForm} editingProduct={editingProduct} cancel={cancel} />;
  }
  if (isError) {
    toast.error(error.message)
  }


  return (
    <main className="space-y-6">
      <section className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Products Management</h1>
        <button onClick={showAddForm} className="flex cursor-pointer items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Plus className="w-5 h-5 mr-2" />
          Add Product
        </button>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <section className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </section>

          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>

          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Prices</option>
            <option value="Under $50">Under $50</option>
            <option value="$50 - $200">$50 - $200</option>
            <option value="Above $200">Above $200</option>
          </select>

          <select value={stockFilter} onChange={(e) => setStockFilter(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Quantity</option>
            <option value="above">above Quantity</option>
            <option value="low">Low Quantity</option>
            <option value="out">Out of Quantity</option>
          </select>
        </section>

        <section className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b">
                <th className=" py-3 px-4">Product</th>
                <th className=" py-3 px-4">Product name</th>
                <th className=" py-3 px-4">Category</th>
                <th className=" py-3 px-4">Price</th>
                <th className=" py-3 px-4">Stock</th>
                <th className=" py-3 px-4">Colors</th>
                <th className=" py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? <>
                <Skeleton change={false} />
                <Skeleton change={false} />
              </> :
                data?.map(product => <ProductCard product={product} key={product.id} setShowForm={setShowForm} setEditingProduct={setEditingProduct} />)
              }
            </tbody>
          </table>
          {data?.length === 0 && !isLoading && <p className="text-center my-3 capitalize text-[1.1rem] text-gray-500">no data to display</p>}
        </section>

      </section>
    </main>
  );
};
export default ProductsManagement