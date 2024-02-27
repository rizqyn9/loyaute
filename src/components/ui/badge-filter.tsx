import { cn } from "@/utils/cn"
import { type VariantProps, cva } from "class-variance-authority"

const badgeVariant = cva(
  "rounded-full flex p-4 min-w-[4rem] items-center justify-center gap-2 transition-colors duration-300",
  {
    variants: {
      state: {
        default: "bg-[#F6F7FB] text-black",
        active: "bg-accent text-white",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
)

export interface BadgeFilterProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariant> {
  label: string
  icon?: string
}

export function BadgeFilter(props: BadgeFilterProps) {
  const { label, icon, state, className } = props
  return (
    <button className={cn(badgeVariant({ state }), className)}>
      {icon && (
        <div className="w-[18px] aspect-[1/1]">
          <img width={16} height={16} src={icon} alt={label} />
        </div>
      )}
      <span className="text-xs">{label}</span>
    </button>
  )
}
