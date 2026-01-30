import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import ConfirmEmail from "@/components/interfaces/ConfirmEmail/ConfirmEmail";

export default async function ConfirmEmailPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()
  const email = data?.claims.email

  if (error || !email) {
    console.log("error", error)
    return <h1>uuu</h1>
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <BarChart3 className="w-10 h-10 text-blue-600" />
            <span className="font-semibold text-2xl">BryHub</span>
          </Link>
        </div>

        <ConfirmEmail />

        <div className="mt-6 text-center">
          <Link
            href="/sign-in"
            className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1"
          >
            Back to Sign In
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}