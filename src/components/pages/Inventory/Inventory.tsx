import { useCallback } from "react";
import supabase from "../../../../supabase-client";
import toast from "react-hot-toast";
import InventoryCart from '../../inventoryCard/InventoryCart';
import { AlertTriangle } from "lucide-react";
import Skeleton from "../../../loadings/Skeleton";
import StockLoading from "../../../loadings/StockLoading";
import { useQuery } from "@tanstack/react-query";

// Inventory Component
const Inventory = () => {



  // get all products===============================================
  const getAllProducts = useCallback(async () => {
    const query = await supabase.from("products").select("*");
    const { data } = query;

    return data

  }, []);

  const { data, isLoading, isError, error } = useQuery(
    { queryKey: ['products'], queryFn: getAllProducts }
  )


  if (isError) {
    toast.error(error.message)
  }




  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Inventory Management</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-lg shadow p-6">
          <section className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
            <h2 className="text-xl font-bold">Low Stock Alerts</h2>
          </section>
          <section className="space-y-3">
            {isLoading ? <StockLoading /> :
              data?.filter(p => p.Quantity < 10).length === 0 ? (
                <p className="text-gray-500">No low stock items</p>
              ) : (
                data
                  ?.filter(p => p.Quantity < 10)
                  .map(product => {
                    return <>
                      {product.Quantity != 0 && <section key={product.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                        <section>
                          <p className="font-medium">{product.productName}</p>
                          <p className="text-sm text-gray-600">{product.category}</p>
                        </section>
                        <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded font-bold">
                          {product.Quantity} left
                        </span>
                      </section>}

                    </>
                  }
                  )
              )
            }

          </section>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <section className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-xl font-bold">Out of Stock</h2>
          </section>
          {isLoading ? <StockLoading /> : data?.filter(p => p.Quantity < 10).length === 0 ? (
            <p className="text-gray-500">No low stock items</p>
          ) : (
            data
              ?.filter(p => p.Quantity == 0)
              .map(product => {
                return <>
                  {product.Quantity == 0 && <section key={product.id} className="flex items-center justify-between p-3 bg-red-50 rounded">
                    <section>
                      <p className="font-medium">{product.productName}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </section>
                    <span className="px-3 py-1 bg-red-200 text-red-800 rounded font-bold">
                      Out of Stock
                    </span>
                  </section>}

                </>
              }





              )
          )}

        </section>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Stock Adjustment</h2>
        <section className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-center py-3 px-4">Product</th>
                <th className="text-center py-3 px-4">Category</th>
                <th className="text-center py-3 px-4">Stock</th>
                <th className="text-center py-3 px-4">Status</th>
                <th className="text-center py-3 px-4">Actions</th>
              </tr>
            </thead>
            {isLoading ? <>
              <Skeleton change={true} />
              <Skeleton change={true} />
              <Skeleton change={true} />
            </> : <tbody>
              {data?.map(product => <InventoryCart key={product.id} product={product} />)}
            </tbody>}

          </table>
          {data && data.length < 1 && !isLoading && <p className="text-center my-3 capitalize text-[1.1rem] text-gray-500">no data to display</p>}
        </section>

      </section>
    </main>
  );
};
export default Inventory
