
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../../../supabase-client";
import toast from "react-hot-toast";
import { resetPasswordSchema, type ResetPasswordType } from "../../../schema/resetpassword.schema";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

export default function ResetPassword() {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        reset
    } = useForm<ResetPasswordType>({
        defaultValues: {
            password: "",
        },
        mode: "onTouched",
        resolver: zodResolver(resetPasswordSchema)
    })
    // reset password=======================================================
    const resetPassword = async (values: ResetPasswordType) => {
        setIsLoading(true)
        const { error } = await supabase.auth.updateUser(
            { password: values.password },
        );

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Password updated successfully!");
            reset()
            setTimeout(() => navigate("/login"), 700);
        }
        setIsLoading(false)
    };

    return (
        <>
            <main className="h-screen flex justify-center items-center bg-linear-to-br from-blue-500   via-blue-500 to-purple-500">
                <section className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Reset Password</h1>
                    <p className="text-sm text-gray-600 mb-6">Enter your new password below</p>
                    <form onSubmit={handleSubmit(resetPassword)} action="">

                        <section className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                New Password
                            </label>
                            <input
                                {...register("password")}
                                type="password"
                                id="password"
                                placeholder="Enter new password"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            {errors?.password && touchedFields.password && <p className='bg-[#F8D7DA] px-3 py-1 rounded-lg text-[#581528] text-[1rem] border my-2 capitalize border-[#f7bfc4]'>{errors?.password.message}</p>}
                        </section>

                        <button className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                            {isLoading ? <BeatLoader
                                color="#fff"
                                size={10}
                            /> : "Reset Password"}
                        </button>
                    </form>
                    <section className="text-center mt-6">
                        <Link
                            to="/login"
                            className="text-[#155DFC] hover:text-[#0d42b5] text-sm font-medium hover:underline transition-colors duration-300"
                        >
                            ← Back to Login
                        </Link>
                    </section>
                </section>

            </main>
            {/* -----------------------------head tag----------------------------- */}
            <title>Reset Password</title>
        </>
    );
}
