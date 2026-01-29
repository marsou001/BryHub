export const features = [
  {
    title: "AI Insights",
    description: "Generate summaries, trends, and recommendations using AI.",
  },
  {
    title: "Analytics Dashboards",
    description: "Track KPIs with clean, real-time dashboards.",
  },
  {
    title: "Team Workspaces",
    description: "Multi-tenant organizations with role-based access.",
  },
  {
    title: "Exportable Reports",
    description: "Download CSV and PDF reports ready for clients or execs.",
  },
];

export const pricing = [
  {
    title: "Free",
    price: 0,
    description: "For individuals and small teams exploring BryHub.",
    features: [
      "1 workspace",
      "Up to 3 team members",
      "Basic analytics dashboard",
      "Limited AI insights",
      "Excel exports",
    ],
    cta: "Get started",
    variant: "default" as "default" | "highlight",
  },
  {
    title: "Pro",
    price: 29,
    description: "For growing teams that rely on insights and reports.",
    features: [
      "Up to 5 workspaces",
      "Unlimited team members",
      "Full analytics dashboards",
      "Higher AI usage limits",
      "Excel & PDF reports",
      "Scheduled exports",
      "Role-based permissions",
    ],
    cta: "Start Pro trial",
    variant: "highlight" as "default" | "highlight",
  },
  {
    title: "Business",
    price: 99,
    description: "For companies running BryHub across teams or clients.",
    features: [
      "Unlimited workspaces",
      "Advanced analytics & trends",
      "Highest AI usage limits",
      "Custom AI prompt settings",
      "Advanced roles & permissions",
      "Priority support",
      "Audit logs",
    ],
    cta: "Contact sales",
    variant: "default" as "default" | "highlight",
  },
]