"use client"

import { CheckCircle, Mail } from "lucide-react"
import ResendEmail from "./ResendEmail"
import Link from "next/link"
import { useEffect, useState } from "react"
import { LOCAL_STORAGE_KEYS } from "@/lib/localStorage"
import { redirect } from "next/navigation"

export default function ConfirmEmail() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem(LOCAL_STORAGE_KEYS.CONFIRMATION_EMAIL_KEY)
    if (email === null) {
      redirect("/sign-in")
    } else {
      setEmail(email)
    }
  }, []);
  
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
          <Mail className="w-10 h-10 text-blue-600" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        Check your email
      </h2>
      <p className="text-gray-600 text-center mb-8">
        We've sent a confirmation link to
        <br />
        <span className="font-medium text-gray-900">{email}</span>
      </p>

      <div className="space-y-6 mb-6">
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-700">
              <p className="font-medium text-gray-900 mb-1">Next steps:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Open the email we just sent</li>
                <li>Click the confirmation link</li>
                <li>Start using BryHub</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <ResendEmail email={email} />

      {/* Help Text */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Need help?{' '}
          <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  )
}