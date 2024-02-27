type IconMessageProps = {
  className?: string
}

export function IconMessage({ className }: IconMessageProps) {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.2963 0.63347C15.5897 0.625 14.8114 0.625 13.9562 0.625H11.5663C9.42373 0.624991 7.74419 0.624983 6.4117 0.76935C5.0519 0.916674 3.95013 1.22271 3.00942 1.90618C2.43991 2.31995 1.93909 2.82077 1.52532 3.39027C1.34494 3.63854 1.18928 3.90023 1.05541 4.17804C0.623487 5.07442 0.430972 6.11424 0.337194 7.35555C0.244135 8.58734 0.244138 10.0992 0.244141 11.9661V12.0528C0.244131 14.1954 0.244124 15.875 0.38849 17.2074C0.535815 18.5672 0.841852 19.669 1.52532 20.6097C1.93909 21.1792 2.43991 21.6801 3.00942 22.0938C3.95013 22.7773 5.0519 23.0833 6.4117 23.2306C7.74416 23.375 9.42367 23.375 11.5662 23.375H14.0053C16.1479 23.375 17.8275 23.375 19.1599 23.2306C20.5197 23.0833 21.6215 22.7773 22.5622 22.0938C23.1317 21.6801 23.6325 21.1792 24.0463 20.6097C24.7298 19.669 25.0358 18.5672 25.1831 17.2074C25.3275 15.875 25.3275 14.1955 25.3275 12.0529V11.9961C25.3275 11.1288 25.3275 10.3406 25.3186 9.62595C25.3127 9.14274 24.9161 8.75586 24.4329 8.76184C23.9497 8.76781 23.5628 9.16438 23.5688 9.64759C23.5775 10.3503 23.5775 11.1283 23.5775 12C23.5775 14.2068 23.5763 15.7917 23.4433 17.0189C23.3121 18.2298 23.0611 18.9884 22.6305 19.5811C22.3247 20.002 21.9545 20.3722 21.5336 20.678C20.9409 21.1086 20.1823 21.3596 18.9714 21.4908C17.7442 21.6238 16.1593 21.625 13.9525 21.625H11.6191C9.41231 21.625 7.82747 21.6238 6.60019 21.4908C5.3893 21.3596 4.63071 21.1086 4.03804 20.678C3.6171 20.3722 3.24693 20.002 2.9411 19.5811C2.5105 18.9884 2.2595 18.2298 2.12831 17.0189C1.99534 15.7917 1.99414 14.2068 1.99414 12C1.99414 10.0923 1.99471 8.64575 2.08222 7.48738C2.11952 6.99373 2.17183 6.56754 2.24231 6.19394L3.96482 7.91645C5.86915 9.8208 7.36153 11.3132 8.6825 12.3211C10.0346 13.3527 11.3094 13.9588 12.7858 13.9588C15.0385 13.9588 16.8543 12.5406 19.2246 10.2684C19.5735 9.93404 19.5852 9.38014 19.2508 9.03128C18.9164 8.68242 18.3625 8.6707 18.0137 9.0051C15.5893 11.3289 14.2479 12.2088 12.7858 12.2088C11.8459 12.2088 10.9404 11.8426 9.74402 10.9298C8.52741 10.0015 7.11688 8.59364 5.15495 6.6317L2.94154 4.41829C3.24728 3.99761 3.61731 3.62764 4.03804 3.32196C4.63071 2.89136 5.3893 2.64036 6.60019 2.50917C7.82747 2.3762 9.41231 2.375 11.6191 2.375H13.9525C14.8119 2.375 15.5803 2.37501 16.2753 2.38334C16.7585 2.38914 17.155 2.00211 17.1607 1.5189C17.1665 1.03568 16.7795 0.639263 16.2963 0.63347Z"
        // fill="#272A2D"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1175 0.625C20.3456 0.625 18.9092 2.06142 18.9092 3.83333C18.9092 5.60525 20.3456 7.04167 22.1175 7.04167C23.8894 7.04167 25.3258 5.60525 25.3258 3.83333C25.3258 2.06142 23.8894 0.625 22.1175 0.625ZM20.6592 3.83333C20.6592 3.02792 21.3121 2.375 22.1175 2.375C22.9229 2.375 23.5758 3.02792 23.5758 3.83333C23.5758 4.63875 22.9229 5.29167 22.1175 5.29167C21.3121 5.29167 20.6592 4.63875 20.6592 3.83333Z"
        fill="#0074E0"
      />
    </svg>
  )
}
