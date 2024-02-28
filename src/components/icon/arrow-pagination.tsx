type ArrowPaginationIconProps = {
  className?: string
}

export function ArrowPaginationIcon({ className }: ArrowPaginationIconProps) {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.3337 7H1.66699M1.66699 7L7.50033 12.8333M1.66699 7L7.50033 1.16667"
        stroke="#101828"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
