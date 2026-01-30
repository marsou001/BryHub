"use client"

import { createClient } from "@/lib/supabase/client"
import { useState } from "react"

const supabase = await createClient()

export default function ResendEmail({ email }: { email: string }) {
  const [isResending, setIsResending] = useState(false)

  async function handleResendEmail() {
    setIsResending(true)

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: { emailRedirectTo: "http://localhost:3000/dashboard"}
    })

    if (error) {
      // toast error message
      return
    } else {
      // toast error message
    }
    setIsResending(false)
  }

  return (
    <div className="text-center">
      <p className="text-sm text-gray-600 mb-3">
        Didn't receive the email?
      </p>
      <button
        onClick={handleResendEmail}
        disabled={isResending}
        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            isResending
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isResending ? 'Sending...' : 'Resend Email'}
      </button>
    </div>
  )
}