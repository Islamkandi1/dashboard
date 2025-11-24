import { Mail, Lock, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="min-h-screen  bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <section className="w-full md:w-[75%] lg:w-[50%]  gap-6r">

        {/* LOGIN FORM */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <section className="bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <section className="flex items-center justify-center mb-4">
            </section>
            <h2 className="text-3xl font-bold text-center mb-2">
              Welcome Back
            </h2>
            <p className="text-center text-blue-100">
              Sign in to continue to your account
            </p>
          </section>

          {/* Login Form */}
          <section className="p-8">
            <form className="space-y-5">
              {/* Email Field */}
              <section>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <section className="relative">
                  <section className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </section>
                  <input
                    type="email"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </section>
              </section>

              {/* Password Field */}
              <section>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <section className="relative">
                  <section className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </section>
                  <input
                    type="password"
                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                </section>
              </section>

              {/* Forgot Password */}
              <section className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </button>
              </section>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all flex items-center justify-center group"
              >
                Sign In
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <section className='flex items-center gap-2 capitalize'>
                <p>create a new account ?</p>
                <Link to="/signup" className='cursor-pointer hover:underline transition-all duration-300 text-[#2858FB] font-medium'>SignUp</Link>

              </section>
            </form>
          </section>
        </section>


      </section>
    </main>
  );
}