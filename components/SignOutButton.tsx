"use client"

import { createClient } from "@/lib/supabase/client"
import { redirect } from "next/navigation"

const supabase = await createClient()
export default function SignOutButton() {

  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log("error signing out: ", error.message)
      return
    }

    redirect("/")
  }
  return <button onClick={signOut}>Sign out</button>
}