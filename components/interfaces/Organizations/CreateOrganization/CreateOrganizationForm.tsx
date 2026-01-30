"use client"

import Link from "next/link";
import { SubmitEvent, useState } from "react";
import { ArrowRight, BarChart3, Building } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

const supabase = await createClient()

export default function CreateOrganizationForm() {
  const [name, setName] = useState("")
  const [isCreatingOrganization, setIsCreatingOrganization] = useState(false)

  function generateSlugFromName(name: string) {
    let processedName = name.toLowerCase().replaceAll(/-|\s/g, "_");
    const diff = 12 - processedName.length
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        const letter = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97)
        processedName += letter
      }
    }

    return processedName;
  }

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsCreatingOrganization(true)

    const { data: organizationData, error } = await supabase
      .from("organizations")
      .insert({ name })
      .select()
    if (error !== null) {
      // TODO: toast error message
    } else {
      const { data: userData } = await supabase.auth.getUser()
      const { data } = await supabase
        .from("organization_members")
        .insert({ organization_id: organizationData[0].id, user_id: userData.user?.id })
        .select()
      redirect(`/organizations/${data?.[0].name}/dashboard`)
    }
    setIsCreatingOrganization(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-2">
          Organization name *
        </label>
        <div className="relative">
          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            id="organizationName"
            name="organizationName"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Acme Corporation"
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          This will be the name of your workspace
        </p>
      </div>

      <div>
        <label htmlFor="organizationSlug" className="block text-sm font-medium text-gray-700 mb-2">
          Organization URL
        </label>
        <div className="flex items-center">
          <span className="px-4 py-3 bg-gray-100 text-gray-600 border border-r-0 border-gray-300 rounded-l-lg text-sm">
            bryhub.com/organizations
          </span>
          <input
            id="organizationSlug"
            name="organizationSlug"
            type="text"
            disabled
            value={generateSlugFromName(name)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="acme-corporation"
            pattern="[a-z0-9-]+"
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Building className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-sm">
            <p className="font-medium text-gray-900 mb-1">What's an organization?</p>
            <p className="text-gray-600">
              Organizations help you manage multiple projects and team members in one place. 
              You can invite teammates and control their access levels.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={isCreatingOrganization}
          className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
        >
          {isCreatingOrganization ? "Creating..." : "Create Organization"}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  )
}