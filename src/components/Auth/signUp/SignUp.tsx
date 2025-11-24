    import { zodResolver } from '@hookform/resolvers/zod'
    import { ArrowRight, Eye, Lock, Mail, User, } from 'lucide-react'
    import { useForm } from 'react-hook-form'
    import { Link } from 'react-router-dom'
    import { signupSchema, type SignUpType } from '../../../schema/signUp.schema'
    import supabase from '../../../../supabase-client'
    import toast from 'react-hot-toast'
import type { dataType } from '../../../types/signUp.type'

    const SignUp = () => {

        const {
            register,
            handleSubmit,
            formState: { errors, touchedFields },
            reset
        } = useForm<SignUpType>({
            defaultValues: {
                name: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            mode: "onTouched",
            resolver: zodResolver(signupSchema)
        })


        // sign up===============================================
        async function SignUp(values: SignUpType) {
            // sign up==================================================
            const { data, error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password
            })
            if (error) {
                toast.error(error.message)
            } else {
                reset()
                toast.success("signup successfully")
                console.log(data);
                addNewUser(values, data)
            }

        }
        //add new user ============================================================
        async function addNewUser(values: SignUpType, data: dataType ) {
            const { error } = await supabase
                .from("users")
                .insert({
                    user_id: data?.user?.id,
                    name: values.name,
                    role: "admin"
                });
            if (error) {
                toast.error(error.message);
                return;
            }
        }


        return (
            <>
                {/* SIGNUP FORM */}
                <main className="flex justify-center py-3 px-2 ">
                    <section className='w-full overflow-hidden  rounded-2xl shadow-xl md:w-[75%] lg:w-[50%]'>
                        <section className="bg-linear-to-r from-purple-600 to-pink-600 p-8 text-white">
                            <h2 className="text-3xl font-bold text-center mb-1">
                                Create Account
                            </h2>
                            <p className="text-center text-purple-100">
                                Sign up to get started with us
                            </p>
                        </section>

                        {/* Signup Form */}
                        <section className="p-6">
                            <form onSubmit={handleSubmit(SignUp)} >
                                {/* Name Field */}
                                <section className='mb-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <section className="relative">
                                        <section className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </section>
                                        <input
                                            {...register("name")}
                                            type="text"
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />

                                    </section>
                                    {errors?.name && touchedFields.name && <p className='bg-[#F8D7DA] px-3 py-1 rounded-lg text-[#581528] text-[1rem] border my-2 capitalize border-[#f7bfc4]'>{errors?.name.message}</p>}
                                </section>

                                {/* Email Field */}
                                <section className='mb-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <section className="relative">
                                        <section className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </section>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder="you@example.com"
                                        />
                                    </section>
                                    {errors?.email && touchedFields.email && <p className='bg-[#F8D7DA] px-3 py-1 rounded-lg text-[#581528] text-[1rem] border my-2 capitalize border-[#f7bfc4]'>{errors?.email.message}</p>}
                                </section>

                                {/* Password Field */}
                                <section className='mb-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <section className="relative">
                                        <section className="absolute  inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </section>
                                        <input
                                            {...register("password")}
                                            type="password"
                                            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 cursor-pointer flex items-center"
                                        >
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        </button>
                                    </section>
                                    {errors?.password && touchedFields.password && <p className='bg-[#F8D7DA] px-3 py-1 rounded-lg text-[#581528] text-[1rem] border my-2 capitalize border-[#f7bfc4]'>{errors?.password?.message}</p>}
                                </section>
                                {/* confirm password Field */}
                                <section className='mb-1'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        confirm password
                                    </label>
                                    <section className="relative">
                                        <section className="absolute  inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400" />
                                        </section>
                                        <input
                                            {...register("confirmPassword")}
                                            type="password"
                                            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 cursor-pointer flex items-center"
                                        >
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        </button>
                                    </section>
                                    {errors?.confirmPassword && touchedFields.confirmPassword && <p className='bg-[#F8D7DA] px-3 py-1 rounded-lg text-[#581528] text-[1rem] border my-2 capitalize border-[#f7bfc4]'>{errors?.confirmPassword?.message}</p>}
                                </section>


                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full  my-3 cursor-pointer bg-linear-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all flex items-center justify-center group"
                                >
                                    Create Account
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <section className='flex items-center gap-2 capitalize'>
                                    <p>Already hava an account ?</p>
                                    <Link to="/login" className='cursor-pointer hover:underline transition-all duration-300 text-[#A221EA] font-medium'>signIn</Link>
                                </section>
                            </form>
                        </section>
                    </section>
                </main>

            </>
        )
    }

    export default SignUp
