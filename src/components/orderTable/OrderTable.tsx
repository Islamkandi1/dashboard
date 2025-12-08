
import OrdersTableSkeleton from '../../loadings/orderSkeleton';
import type { Order } from '../../types/order.type'
import TableRow from '../tableRow/TableRow';
const OrderTable = ({ data, isLoading }: { data: Order | undefined, isLoading: boolean }) => {

    return (
        <table className="w-full">
            <thead className="bg-linear-to-r from-blue-600 to-blue-700">
                <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Order #</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4  text-xs font-semibold text-white uppercase tracking-wider text-center">Email</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">Products</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Total</th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">Date</th>
                </tr>
            </thead>
            <tbody>
                {isLoading && <OrdersTableSkeleton />}
                {data?.data?.map((product) => <TableRow product={product} key={product.id} />
                )}
            </tbody>
        </table>

    )
}

export default OrderTable
