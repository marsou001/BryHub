import CreateOrganization from "@/components/interfaces/Organizations/CreateOrganization/CreateOrganization";
import { createClient } from "@/lib/supabase/server";
import { BarChart3, Building, Plus, Shield } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function OrganizationsPage() {
  const supabase = await createClient()
  const { data: userData, error: userError } = await supabase.auth.getUser()
  if (userError) {
    console.log("error getting user: ", userError.message)
    redirect("sign-in")
  }

  const { user } = userData

  const { data: organizationsData, error } = await supabase
    .from("organization_members")
    .select(`
      organization_id,
      role_id,
      organizations (
        id,
        name,
        slug
      ),
      roles (
        id,
        name
      )
    `)
    .eq("user_id", user.id)

  function getRoleBadgeColor(role: string) {
    switch (role) {
      case 'Owner':
        return 'bg-yellow-100 text-yellow-700';
      case 'Admin':
        return 'bg-blue-100 text-blue-700';
      case 'Analyst':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  console.log(organizationsData, error)

  // TODO: fetch organization subscription
  // if (organizationsData !== null) organizationsData[0].roles[0]
  if (organizationsData?.length === 0) return <CreateOrganization />
  if (organizationsData?.length === 1) redirect(`/organizations/${organizationsData[0].organizations[0].slug}/dashboard`)

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <BarChart3 className="w-10 h-10 text-blue-600" />
            <span className="font-semibold text-2xl">BryHub</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Select an organization</h2>
          <p className="text-gray-600">Choose which workspace you'd like to access</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {organizationsData?.map((org) => (
            <div
              key={org.organization_id}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-left group"
            >
              <Link href={`/organizations/${org.organizations[0].slug}/dashboard`}>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center"
                  >
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${getRoleBadgeColor(
                      org.roles[0].name
                    )}`}
                  >
                    {org.roles[0].name}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {org.organizations[0].name}
                </h3>

                {/* <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{org.members} members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RoleIcon className="w-4 h-4" />
                    <span>{org.plan}</span>
                  </div>
                </div> */}

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    {org.organizations[0].slug}
                  </p>
                </div>
              </Link>
            </div>
          ))}

          {/* Create New Organization Card */}
          <Link
            href="/create-organization"
            className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-all flex flex-col items-center justify-center text-center group min-h-[200px]"
          >
            <div className="w-12 h-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mb-4 transition-colors">
              <Plus className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              Create New Organization
            </h3>
            <p className="text-sm text-gray-600">
              Set up a new workspace for your team
            </p>
          </Link>
        </div>

        {/* Help Text */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-900 mb-1">Need to switch organizations?</p>
              <p className="text-gray-600">
                You can switch between organizations anytime from the settings menu. Your role and permissions 
                may differ across organizations.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/sign-out"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Sign out
          </Link>
        </div>
      </div>
    </main>
  )
}