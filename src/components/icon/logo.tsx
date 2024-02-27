type LogoIconProps = {
  invert?: boolean
  className?: string
}

export function LogoIcon({ invert, className }: LogoIconProps) {
  return (
    <svg
      width="35"
      height="36"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_2015_853)">
        <path
          d="M17.1982 35.2034C7.69674 35.2034 -0.00520325 27.5014 -0.00520325 18V5.95766C-0.00520325 4.58888 0.538544 3.27616 1.50642 2.30828C2.4743 1.3404 3.78702 0.796658 5.1558 0.796658H16.338V8.34377C16.338 10.0658 16.233 11.8498 15.3299 13.3155C14.6832 14.3659 13.8183 15.265 12.7936 15.9517C11.769 16.6384 10.6086 17.0967 9.39127 17.2955L9.06183 17.3489C8.92601 17.3953 8.80811 17.483 8.72462 17.5998C8.64114 17.7165 8.59626 17.8565 8.59626 18C8.59626 18.1435 8.64114 18.2835 8.72462 18.4002C8.80811 18.517 8.92601 18.6047 9.06183 18.6512L9.39127 18.7045C11.17 18.995 12.8124 19.837 14.0868 21.1113C15.3612 22.3857 16.2031 24.0282 16.4937 25.8069L16.547 26.1363C16.5934 26.2722 16.6812 26.3901 16.7979 26.4735C16.9147 26.557 17.0546 26.6019 17.1982 26.6019C17.3417 26.6019 17.4816 26.557 17.5984 26.4735C17.7151 26.3901 17.8029 26.2722 17.8493 26.1363L17.9026 25.8069C18.1014 24.5895 18.5597 23.4291 19.2464 22.4045C19.9331 21.3798 20.8322 20.5149 21.8826 19.8683C23.3483 18.9651 25.1323 18.8602 26.8544 18.8602H34.3809C33.931 27.9616 26.4105 35.2034 17.1982 35.2034Z"
          fill="#F07CF2"
        />
        <path
          d="M34.4062 17.1398H26.8591C25.1371 17.1398 23.3531 17.0349 21.8874 16.1317C20.7416 15.4257 19.7772 14.4613 19.0712 13.3155C18.168 11.8498 18.0631 10.0658 18.0631 8.34377V0.796658H29.2452C30.614 0.796658 31.9267 1.3404 32.8946 2.30828C33.8625 3.27616 34.4062 4.58888 34.4062 5.95766V17.1398ZM-0.000461578 33.483C-0.000461578 33.0268 0.180786 32.5892 0.50341 32.2666C0.826038 31.9439 1.26361 31.7627 1.71988 31.7627C2.17614 31.7627 2.61371 31.9439 2.93634 32.2666C3.25896 32.5892 3.44021 33.0268 3.44021 33.483C3.44021 33.9393 3.25896 34.3769 2.93634 34.6995C2.61371 35.0221 2.17614 35.2034 1.71988 35.2034C1.26361 35.2034 0.826038 35.0221 0.50341 34.6995C0.180786 34.3769 -0.000461578 33.9393 -0.000461578 33.483Z"
          fill={invert ? "white" : "#007DFC"}
        />
      </g>
      <defs>
        <clipPath id="clip0_2015_853">
          <rect
            width="34.4067"
            height="34.4067"
            fill="white"
            transform="matrix(-1 0 0 -1 34.4062 35.2034)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}