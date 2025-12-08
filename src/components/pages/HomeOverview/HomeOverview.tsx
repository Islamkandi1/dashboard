import KPICard from "../../KPICard/KPICard";
import { Package, ShoppingCart, DollarSign, Users } from "lucide-react";
import ordersCount from "../../../apis/getTotalOrders";
import productsCount from "../../../apis/getTotalProducts";
import usersCount from "../../../apis/getTotalCustomers";
import totalRevenue from "../../../apis/getTotalRefrence";
import TopSelling from "../../topSelling/TopSelling";
import LeastSelling from "../../lessSelling/LessSelling";
// Home Overview Component
const HomeOverview = () => {
  return (
    <>
    <main className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Products"
          value={productsCount}
          icon={Package}
          trend={12}
          color="bg-blue-500"
        />
        <KPICard
          title="Total orders"
          value={ordersCount}
          icon={ShoppingCart}
          trend={12}
          color="bg-green-500"
        />

        <KPICard
          title="Total Revenue"
          value={`$${totalRevenue}`}
          icon={DollarSign}
          trend={15}
          color="bg-purple-500"
        />
        <KPICard
          title="Total Customers"
          value={usersCount}
          icon={Users}
          trend={5}
          color="bg-orange-500"
        />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopSelling />
        <LeastSelling />
      </section>

    </main>
    {/* --------------------title------------------------- */}
    <title>Dashboard Overview</title>
    </>
  );
};
export default HomeOverview