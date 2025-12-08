

export default function OrdersTableSkeleton() {
    return (

        <>
            {[1, 2].map((row) => (
                <tr key={row}>
                    <td className="px-3 py-3 border border-gray-300">
                        <div className="h-4 w-15 bg-gray-200 rounded animate-pulse"></div>
                    </td>

                    <td className="px-3 py-3  border border-gray-300">
                        <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </td>

                    <td className="px-3 py-3  border border-gray-300">
                        <div className="h-4 w-29   bg-gray-200 rounded animate-pulse"></div>
                    </td>

                    <td className="px-3 py-3  border border-gray-300">
                        <div className="space-y-2">
                            <div className="h-4 w-34 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div className="h-4 w-34 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </td>

                    <td className="px-3 py-3  border border-gray-300">
                        <div className="space-y-2">
                            <div className="h-4 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div className="h-4 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </td>

                    <td className="px-3 py-3  border border-gray-300">
                        <div className="h-4 w-14 bg-gray-200 rounded animate-pulse"></div>
                    </td>

                    <td className="px-3 py-3 border border-gray-300">
                        <div className="h-4 w-15 bg-gray-200 rounded-md animate-pulse"></div>
                    </td>
                </tr>
            ))}
        </>



    );
}