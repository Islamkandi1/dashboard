import { useState, useEffect } from "react";
import { Package, ShoppingCart, DollarSign, Users } from "lucide-react";
import KPICard from "../KPICard/KPICard";
import getTotalOrders from "../../apis/getTotalOrders";
import getTotalProductsme from "../../apis/getTotalProducts";
import getTotalCustomers from "../../apis/getTotalCustomers";
import getTotalRevenue from "../../apis/getTotalRefrence";
import type { Stats } from "../../types/AboutProject.type";
import DashboardSkeleton from "../../loadings/AboutSkeleton";



const AboutProject = () => {
    const [stats, setStats] = useState<Stats>({
        orders: 0,
        products: 0,
        users: 0,
        revenue: 0
    });
    const [loading, setLoading] = useState(true);

    //   -----------------product stats fetch-----------------------
    const fetchStats = async () => {
        const [orders, products, users, revenue] = await Promise.all([
            getTotalOrders(),
            getTotalProductsme(),
            getTotalCustomers(),
            getTotalRevenue()
        ]);
        setStats({ orders, products, users, revenue });
        setLoading(false);
    };


    useEffect(() => {
        const confirmFetch = async () => fetchStats();
        confirmFetch()
    }, []);


    return (
        <main className="space-y-6">
            {loading ? <DashboardSkeleton /> : <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard title="Total Products" value={stats.products} icon={Package} trend={12} color="bg-blue-500" />
                <KPICard title="Total Orders" value={stats.orders} icon={ShoppingCart} trend={12} color="bg-green-500" />
                <KPICard title="Total Revenue" value={`$${stats.revenue}`} icon={DollarSign} trend={15} color="bg-purple-500" />
                <KPICard title="Total Customers" value={stats.users} icon={Users} trend={5} color="bg-orange-500" />
            </section>}

        </main>
    );
};
export default AboutProject