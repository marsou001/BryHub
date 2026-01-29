import { Pricing } from "@/types"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  isHighlighted,
}: Pricing) {

  return (
    <div
      className={`bg-white rounded-2xl p-8 ${
        isHighlighted
          ? 'border-2 border-blue-500 shadow-xl scale-105'
          : 'border border-gray-200'
      }`}
    >
      {isHighlighted && (
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-5xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      <Link
        href="/sign-up"
        className={`block w-full py-3 rounded-lg font-medium text-center transition-colors ${
          isHighlighted
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </Link>
      <ul className="mt-8 space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}