import type { OrderData } from '../../types/order.type'

const TableRow = ({ product }: { product: OrderData }) => {
    return (
        <>
            <tr>
                <td className="px-3 py-5 border border-gray-300">
                    <span className="text-[#155DFC] font-semibold text-sm">ORD-{product.id}</span>
                </td>
                <td className="px-3 py-5 border border-gray-300"><span className="font-semibold text-gray-900">{product.userName}</span></td>
                <td className="px-3 py-5 border border-gray-300"><span className="text-sm text-gray-600">{product.email}</span></td>

                <td className="border border-gray-300 p-2">
                    <ul className='space-y-2'>
                        {product.products.map((order) => (
                            <li key={order.id} className='bg-blue-50 rounded-lg px-3 py-2 text-sm text-gray-700' >
                                - {order.productName.split(" ", 3).join(" ")}
                            </li>
                        ))}
                    </ul>
                </td>
                <td className="border border-gray-300 p-2 text-center">
                    <ul className='space-y-2'>
                        {product.products.map((order) => (
                            <li key={order.id} className='bg-[#155DFC] text-white px-3 py-1 rounded-full text-xs font-semibold' >
                                {order.quantity}
                            </li>
                        ))}
                    </ul>
                </td>
                <td className="px-3 py-5 border border-gray-300"><span className='text-lg font-bold text-gray-900'>${product.total}</span> </td>
                <td className="px-3 py-5 border border-gray-300">
                    <span className='inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium'>{product.created_at.split("", 10).join("")}</span>
                </td>
            </tr>

        </>
    )
}

export default TableRow
