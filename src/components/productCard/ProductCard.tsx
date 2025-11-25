import toast from 'react-hot-toast'
import supabase from '../../../supabase-client'
import type { Product2 } from '../../types/products.type'
import { Edit, Trash2 } from 'lucide-react'
import { ClipLoader } from 'react-spinners'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const ProductCard = ({ product, setEditingProduct, setShowForm }: { product: Product2; setEditingProduct: (product: Product2) => void; setShowForm: (show: boolean) => void }) => {
    const queryClient = useQueryClient();
    // delete product==========================================================
    async function deleteProduct(id: number) {
        const {data } = await supabase.from("products").delete().eq("id", id)
        return data
    }
    // handle add & update cashing===============================================
    const { mutate, isPending } = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            toast.success('deleted Successfully!')
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (error) => {
             toast.error(error.message)
        }
    })
    function onEdit(product: Product2) {
        setEditingProduct(product);
        setShowForm(true);
    }
    return (
        <tr key={product.id} className="border-b hover:bg-gray-50">
            <td>
                <img src={product.image || undefined} className='w-[70px]  object-cover mx-auto' alt="" />
            </td>
            <td className="py-3 px-4 text-center">
                <section className='max-w-[100px]'>
                    <p className="font-medium">{product.productName}</p>
                    <p className="text-sm text-gray-500 line-clamp-1 ">{product.description}</p>
                </section>
            </td>
            <td className="py-3 px-4 text-center">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">{product.category}</span>
            </td>
            <td className="py-3 px-4 font-medium">${product.price}</td>
            <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded text-sm ${product.Quantity < 10 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {product.Quantity}
                </span>
            </td>
            <td className="py-3 px-4 text-sm">{Array.isArray(product.Colors) ? product.Colors.join(', ') : product.Colors}</td>
            <td className="py-3 px-4">
                <section className="flex justify-end items-center gap-2">
                    <button onClick={() => onEdit(product)} className="p-2 cursor-pointer text-blue-600 hover:bg-blue-50 rounded transition">
                        <Edit className="w-4 h-4" />
                    </button>
                    <button disabled={isPending} onClick={() => mutate(product.id)} className="p-2 cursor-pointer text-red-600 hover:bg-red-50 rounded transition">
                        {isPending ? <ClipLoader
                            color="#E7000B"
                            size={15}
                        /> : <Trash2 className="w-4 h-4" />}
                    </button>
                </section>
            </td>
        </tr>
    )
}

export default ProductCard
