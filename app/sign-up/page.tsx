import SignUpForm from "@/components/interfaces/SignUp/SignUpForm";
import { BarChart3 } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Image/Branding */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center p-12">
        <div className="max-w-md text-white">
          <h2 className="text-4xl font-bold mb-6">
            Start your journey to better insights today
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Create your account and get instant access to powerful AI-driven analytics.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xl">
                ✓
              </div>
              <p>14-day free trial</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xl">
                ✓
              </div>
              <p>No credit card required</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xl">
                ✓
              </div>
              <p>Cancel anytime</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xl">
                ✓
              </div>
              <p>24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <BarChart3 className="w-10 h-10 text-blue-600" />
              <span className="font-semibold text-2xl">BryHub</span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
            <p className="text-gray-600">Start your 14-day free trial</p>
          </div>

          <SignUpForm />

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}