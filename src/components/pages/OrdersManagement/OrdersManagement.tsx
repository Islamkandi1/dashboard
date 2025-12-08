import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../../apis/getOrders";
import toast from "react-hot-toast";
import OrderTable from "../../orderTable/OrderTable";

// Orders Management Component
const OrdersManagement = () => {

  // ------------------------cash data ------------------------------------
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: ['orders'],
      queryFn: getOrders
    }
  )
  if (isError) {
    toast.error(error.message)
  }
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Orders Management</h1>

      <section className="bg-white rounded-lg shadow overflow-hidden">
        <section className="overflow-x-auto">

          <OrderTable data={data} isLoading={isLoading} />
          
        </section>
      </section>
    </section>
  );
};
export default OrdersManagement