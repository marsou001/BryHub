import { ForwardRefExoticComponent, RefAttributes } from "react"
import { LucideProps } from "lucide-react"

export type Feature = {
  title: string
  description: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export type Pricing = {
  title: Plan
  price: number
  description: string
  features: string[]
  cta: string
  isHighlighted: boolean
}

export type Plan = "Free" | "Pro" | "Business"