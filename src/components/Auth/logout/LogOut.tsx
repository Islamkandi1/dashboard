import { User, LogOut } from 'lucide-react'
import { useContext, useState } from 'react'
import { userSession } from '../../../context/userSession/sessionContext'
import supabase from '../../../../supabase-client'
import toast from 'react-hot-toast'
import { BeatLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const { session } = useContext(userSession)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    // log out===================================================
    async function logOut() {
        setIsLoading(true)
        const { error } = await supabase.auth.signOut()
        if (error) {
            toast.error(error.message)
        } else {
            toast.success("logout successfully")
            setTimeout(() => {
                navigate("/login")
            }, 700);
        }
        setIsLoading(false)
    }

    return (
        <>
            <section className="pt-6 ">
                <section className="flex items-center px-4 py-3 mb-2">
                    <section className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                        <User className="w-5 h-5" />
                    </section>
                    <section className="flex-1">
                        <p className="text-sm font-medium">{session?.user.user_metadata.full_name}</p>
                    </section>
                </section>
                <button
                    onClick={logOut}
                    className="w-full cursor-pointer flex items-center px-4 py-3 rounded-lg transition hover:bg-red-600"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    {isLoading ? <BeatLoader
                        color="#fff"
                        size={10}
                    /> : "Logout"}

                </button>
            </section>
        </>
    )
}

export default Logout
