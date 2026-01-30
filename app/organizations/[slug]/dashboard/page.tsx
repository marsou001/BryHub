import SignOutButton from "@/components/SignOutButton";

export default async function DashboardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main>
      <h1>
        Dashboard {slug}
      </h1>
      <SignOutButton />      
    </main>
  )
}