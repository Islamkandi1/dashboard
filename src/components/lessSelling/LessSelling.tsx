import { useEffect, useState } from "react";
import supabase from "../../../supabase-client";
import toast from "react-hot-toast";
import { TrendingDown } from "lucide-react";
import type { orderProducts } from "../../types/order.type";
import type { Selling } from "../../types/selling.type";
import ProductSalesSkeleton from "../../loadings/SalesSkeleton";

export default function LeastSelling() {

    const [leastSelling, setLeastSelling] = useState<Selling[]>([]);
    const [loading, setLoading] = useState(true);

    // -----------------------least selling products fetch-------------------------------
    async function getData() {
        const { data: orders, error } = await supabase
            .from("orders")
            .select("products");

        // -------------------------handle error---------------------------------------
        if (error) {
            toast.error(error.message);
            return;
        }

        const productSales: Record<string, { name: string; count: number, price: number, id: number }> = {};
            
        orders.forEach((order) => {
            order.products.forEach((product: orderProducts) => {


                if (!productSales[product.productName]) {
                    productSales[product.productName] = {
                        name: product.productName,
                        count: 1,
                        price: product.price,
                        id: product.id
                    };
                } else {
                    productSales[product.productName].count++;
                }
            });
        });

        const salesArray = Object.values(productSales);

        setLeastSelling(
            [...salesArray].sort((a, b) => a.count - b.count).slice(0, 5)
        );

        setLoading(false);
    }
    useEffect(() => {
        const confirm = () => getData();
        confirm()
    }, []);

    return (
        <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
                <TrendingDown className="w-5 h-5 mr-2 text-red-600" />
                Least Selling Products
            </h2>

            <section className="space-y-3">
                {loading && <ProductSalesSkeleton color="red" />}
                {leastSelling.map((product, idx) => (
                    <section key={product.id} className="flex items-center justify-between p-3 bg-red-50 rounded">
                        <section className="flex items-center">
                            <span className="font-bold text-red-600 mr-3">#{idx + 1}</span>
                            <span className="font-medium">{product.name.split(" ", 3).join(" ")}</span>
                        </section>
                        <section className="text-right">
                            <p className="font-bold text-red-600">{product.count} sales</p>
                            <p className="text-sm text-gray-600">${product.price}</p>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    );
}
