import SignInForm from "@/components/interfaces/SignIn/SignInForm";
import { ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="relative bg-gray-50 flex min-h-screen items-center justify-center">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <BarChart3 className="w-10 h-10 text-blue-600" />
              <span className="font-semibold text-2xl text-background">BryHub</span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          <SignInForm />

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center p-12 rounded-l-lg">
        <div className="max-w-md text-white">
          <h2 className="text-4xl font-bold mb-6">
            Transform your data into actionable insights
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of companies using InsightAI to make better data-driven decisions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">AI-Powered Analytics</p>
                <p className="text-blue-100 text-sm">Generate insights automatically</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Real-Time Reporting</p>
                <p className="text-blue-100 text-sm">Stay updated with live data</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Enterprise Security</p>
                <p className="text-blue-100 text-sm">Bank-level data protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
