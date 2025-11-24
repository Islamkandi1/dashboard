import { TrendingDown, TrendingUp } from "lucide-react";
import mockData from './../../../mockUpData';
import KPICard from "../../KPICard/KPICard";
import {  Package, ShoppingCart,DollarSign ,Users} from "lucide-react";
// Home Overview Component
const HomeOverview = () => {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Total Products" 
          value={mockData.kpis.totalProducts} 
          icon={Package}
          trend={12}
          color="bg-blue-500"
        />
        <KPICard 
          title="Total Orders" 
          value={mockData.kpis.totalOrders} 
          icon={ShoppingCart}
          trend={8}
          color="bg-green-500"
        />
        <KPICard 
          title="Total Revenue" 
          value={`$${mockData.kpis.totalRevenue.toLocaleString()}`} 
          icon={DollarSign}
          trend={15}
          color="bg-purple-500"
        />
        <KPICard 
          title="Total Customers" 
          value={mockData.kpis.totalCustomers} 
          icon={Users}
          trend={5}
          color="bg-orange-500"
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
            Top Selling Products
          </h2>
          <section className="space-y-3">
            {mockData.topProducts.map((product, idx) => (
              <section key={product.id} className="flex items-center justify-between p-3 bg-green-50 rounded">
                <section className="flex items-center">
                  <span className="font-bold text-green-600 mr-3">#{idx + 1}</span>
                  <span className="font-medium">{product.name}</span>
                </section>
                <section className="text-right">
                  <p className="font-bold text-green-600">{product.sales} sales</p>
                  <p className="text-sm text-gray-600">${product.revenue.toLocaleString()}</p>
                </section>
              </section>
            ))}
          </section>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <TrendingDown className="w-5 h-5 mr-2 text-red-600" />
            Least Selling Products
          </h2>
          <section className="space-y-3">
            {mockData.leastProducts.map((product, idx) => (
              <section key={product.id} className="flex items-center justify-between p-3 bg-red-50 rounded">
                <section className="flex items-center">
                  <span className="font-bold text-red-600 mr-3">#{idx + 1}</span>
                  <span className="font-medium">{product.name}</span>
                </section>
                <section className="text-right">
                  <p className="font-bold text-red-600">{product.sales} sales</p>
                  <p className="text-sm text-gray-600">${product.revenue.toLocaleString()}</p>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
};
export default HomeOverview