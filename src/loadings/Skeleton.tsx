

const Skeleton = ({ change }: { change: boolean }) => {

    if (!change) {
        return <tr className="border-b hover:bg-gray-50">
            <td className="px-1 py-6">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
            </td>
            <td className="px-6 py-6">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
            </td>
            <td className="px-6 py-6">
                <div className="h-4 bg-gray-200 rounded w-15"></div>
            </td>
            <td className="px-6 py-6 font-medium"> <div className="h-4 bg-gray-200 rounded w-10"></div></td>
            <td className="px-6 py-6">
                <div className="h-4 bg-gray-200 rounded w-10"></div>
            </td>
            <td className="px-6 py-6 text-sm">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
            </td>
            <td className="px-6 py-6">
                <section className="flex justify-end items-center gap-2">
                    <div className="h-4 bg-gray-200 rounded w-10"></div>
                    <div className="h-4 bg-gray-200 rounded w-10"></div>
                </section>

            </td>
        </tr>
    }

    return (
        <>
            <tr className="animate-pulse">
                <td className="px-6 py-6">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="px-6 py-4">
                    <div className="h-8 bg-gray-200 rounded-lg w-20"></div>
                </td>
                <td className="px-6 py-4">
                    <div className="h-6 bg-gray-200 rounded w-12"></div>
                </td>
                <td className="px-6 py-4">
                    <div className="h-8 bg-gray-200 rounded-lg w-18"></div>
                </td>
                <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                        <div className="h-10 bg-gray-200 rounded-lg w-14"></div>
                        <div className="h-10 bg-gray-200 rounded-lg w-14"></div>
                        <div className="h-10 bg-gray-200 rounded-lg w-14"></div>
                        <div className="h-10 bg-gray-200 rounded-lg w-14"></div>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Skeleton
