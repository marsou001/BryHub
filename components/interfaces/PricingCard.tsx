export default function PricingCard({
  title,
  price,
  description,
  features,
  cta,
  variant,
}: {
  title: string
  price: number
  description: string
  features: string[]
  cta: string
  variant?: "default" | "highlight"
}) {
  const isHighlight = variant === "highlight"

  return (
    <div
      className={[
        "relative rounded-xl border bg-card p-8",
        isHighlight && "ring-2 ring-primary shadow-lg",
      ].join(" ")}
    >
      {isHighlight && (
        <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          Most popular
        </span>
      )}

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 0 && (
          <span className="text-sm text-muted-foreground">/month</span>
        )}
      </div>

      <ul className="mt-6 space-y-2 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="text-primary">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="/signup"
        className={[
          "mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
          isHighlight
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "border bg-background hover:bg-muted",
        ].join(" ")}
      >
        {cta}
      </a>
    </div>
  )
}