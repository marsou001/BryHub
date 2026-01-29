import Feature from "@/components/interfaces/Feature";
import PricingCard from "@/components/interfaces/PricingCard";
import { features, pricing } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";
import { ArrowRight, BarChart3, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user }} = await supabase.auth.getUser();

  console.log("user", user)
  
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-8 h-8 text-blue-600" />
                <span className="font-semibold text-xl text-background">BryHub</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
                <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
                <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
                {!!user ? (
                  <Link
                    href="/dashboard"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >Dashboard</Link>
                ) : (
                  <>
                    <Link href="/sign-in" className="text-gray-600 hover:text-gray-900">Sign In</Link>
                    <Link
                      href="/sign-up"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                AI-Powered Analytics
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Turn Data Into
                <span className="text-blue-600"> Actionable Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Generate AI-powered reports and insights from your business data in seconds. 
                Make smarter decisions with automated analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sign-up"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Watch Demo
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • 14-day free trial
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
              <Image
                src="/assets/dashboard.jpg"
                alt="Dashboard Preview"
                width={100}
                height={100}
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything you need to analyze your data
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful features designed to help you make data-driven decisions faster
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple pricing</h2>
            <p className="text-xl text-gray-600">
              Start free. Upgrade as your team and usage grow.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pricing.map((p) => (
              <PricingCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to transform your data?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies using InsightAI to make better decisions
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Start Your Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div> */}
          {/* <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between"> */}
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <BarChart3 className="w-6 h-6 text-blue-500" />
              <span className="text-white font-semibold">BryHub</span>
            </div>
            <p className="text-sm">© 2026 InsightAI. All rights reserved.</p>
          {/* </div> */}
        </div>
      </footer>
    </main>
  );
}
