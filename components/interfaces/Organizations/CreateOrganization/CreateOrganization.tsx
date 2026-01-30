import Link from "next/link";
import { BarChart3 } from "lucide-react";
import CreateOrganizationForm from "./CreateOrganizationForm";

export default function CreateOrganization() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <BarChart3 className="w-10 h-10 text-blue-600" />
            <span className="font-semibold text-2xl">BryHub</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your organization</h2>
          <p className="text-gray-600">Set up your workspace to get started</p>
        </div>

        <CreateOrganizationForm />

        <p className="text-center text-sm text-gray-500 mt-6">
          You can add team members and configure settings after creating your organization
        </p>
      </div>
    </main>
  )
}