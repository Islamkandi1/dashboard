import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { forgetPasswordSchema, type ForgetPasswordType } from '../../../schema/forgetPassword.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import supabase from '../../../../supabase-client';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

export default function ForgetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset
  } = useForm<ForgetPasswordType>({
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
    resolver: zodResolver(forgetPasswordSchema)
  })
  // --------------------------------------------forget password-------------------------------------
  async function ResetPassword(values: ForgetPasswordType) {
    setIsLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: `${window.location.origin}/resetPassword`,
    });
    if (error) {
      toast.error(error.message)
    } else {
      toast.success("check your mail")
      reset()
    }
    setIsLoading(false)
  }

  return (
    <>
      <section className="min-h-screen bg-linear-to-br from-purple-600 to-purple-900 flex items-center justify-center p-5">
        <section className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md animate-[slideIn_0.5s_ease-out]">
          {/* Icon */}
          <section className="text-center mb-8">
            <section className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-purple-600 to-purple-800 rounded-full shadow-lg">
              <span className="text-4xl">🔒</span>
            </section>
          </section>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
            Forgot Password?
          </h1>
          <p className="text-gray-600 text-center text-sm mb-8 leading-relaxed">
            No worries! Enter your email address and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit(ResetPassword)} action="">
            {/* Input */}
            <section className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
              />
              {errors?.email && touchedFields.email && <p className='bg-[#F8D7DA] px-3 py-1 rounded-lg text-[#581528] text-[1rem] border my-2 capitalize border-[#f7bfc4]'>{errors?.email.message}</p>}
            </section>

            <button
              className="w-full cursor-pointer bg-linear-to-r from-purple-600 to-purple-800 text-white py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              {isLoading ? <BeatLoader
                color="#fff"
                size={10}
              /> : "Send Reset Link"}

            </button>

          </form>


          {/* Back to Login Link */}
          <section className="text-center mt-6">
            <Link
              to="/login"
              className="text-purple-600 hover:text-purple-800 text-sm font-medium hover:underline transition-colors duration-300"
            >
              ← Back to Login
            </Link>
          </section>
        </section>

      </section>
      {/* ---------------------------head tags--------------------------- */}
      <title>Forget Password</title>
    </>
  );
}