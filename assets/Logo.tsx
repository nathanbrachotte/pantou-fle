import React from 'react'

interface SVGProps {
  color: string
  size: number
}

const SVG: React.FC<SVGProps> = ({
  color = 'text-primary-dark',
  size = 24,
}) => {
  return (
    <svg
      width="393"
      height="447"
      viewBox="0 0 393 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M237.941 84.8309C232.564 91.8345 220.843 103.145 212.022 104.437C209.549 104.76 207.183 105.191 204.817 105.945C191.267 110.039 183.2 125.767 177.501 137.616C167.715 157.868 176.748 173.056 186.211 191.155L186.426 191.585V192.232C186.426 193.417 186.426 194.602 186.426 195.786L186.211 200.095L182.662 197.618C167.715 187.277 157.496 171.01 155.883 152.698C154.378 135.354 160.832 119.194 172.876 106.915C189.332 90.3244 213.205 83.2152 235.79 80.9532L241.275 80.4146L237.941 84.8309ZM279.67 81.7072C288.811 82.8921 303.866 85.585 311.719 90.4322C327.527 100.452 327.312 134.6 326.451 151.19L326.236 153.775L323.763 153.452C300.102 150.434 279.025 151.729 261.602 131.584C239.877 106.484 262.892 101.206 277.519 82.6766L278.38 81.5995L279.67 81.7072ZM175.242 318.052C172.446 323.976 169.865 330.872 166.424 336.473C163.521 340.997 159.864 344.768 155.883 348.322C148.678 354.893 140.72 360.925 133.085 366.959C104.048 389.687 89.6357 354.893 86.4095 331.195L86.0869 329.147L88.2377 328.608C149.861 313.205 183.845 273.994 190.192 210.974L191.268 199.772L194.816 210.436C203.419 236.613 186.641 293.168 175.242 318.052Z"
        fill="#FD8061"
      />
      <g filter="url(#filter0_d_18_4163)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M193.911 201.172C197.353 202.788 200.794 204.188 204.235 205.158C210.365 206.881 220.475 208.497 225.207 204.942C232.842 199.341 219.709 175.985 208.967 160.777C198.224 145.569 187.277 139.889 190.88 136.279C194.484 132.67 197.187 137.783 197.187 137.783C197.187 137.783 232.197 174.564 236.284 197.725C240.155 219.486 212.516 219.594 193.159 211.19C187.027 272.055 154.979 314.497 89.3761 330.872C83.2464 332.488 80.9881 323.222 87.1178 321.607C150.462 305.772 179.177 265.16 184.016 206.558C124.436 171.118 136.374 71.1512 257.901 72.9824C283.927 73.4133 307.048 78.799 316.083 84.4003C338.343 98.4054 334.472 149.788 333.397 160.669L366.413 200.957C368.028 202.68 368.136 205.373 366.52 207.204C342.754 234.997 307.588 248.356 275.43 229.934C281.669 237.259 289.412 244.694 298.66 251.587C300.165 252.665 300.811 254.496 300.595 256.219C299.95 260.097 283.282 365.128 321.89 387.102L365.015 398.091C368.351 399.06 387.277 405.954 387.277 433.531C387.277 436.224 385.127 438.271 382.438 438.271L293.821 437.84C266.396 427.93 246.392 416.941 232.197 405.631L232.195 405.629C230.368 404.122 228.54 402.614 226.82 401.107C223.946 404.418 220.141 406.447 213.825 411.509C210.822 413.915 207.518 415.72 210.822 418.126C214.125 420.532 220.496 432.103 220.475 438.271H144.44H101.315C96.3661 438.271 61.0915 415.433 58.2955 358.232C55.8221 305.557 87.7184 216.592 62.9522 190.724C57.8471 183.505 40.9286 179.671 29.3184 185.309C13.8381 192.827 8.59771 208.17 20.0092 227.421C21.2104 229.447 14.1746 238.55 9.79881 228.624C-0.41143 205.463 6.1953 191.626 19.4085 181.7C32.6216 171.773 55.4447 172.908 67.757 184.106C97.7872 210.275 64.9628 298.446 67.8664 357.801C70.2343 407.247 97.0113 425.561 102.498 428.792H149.709C162.604 428.792 206.918 433.743 207.518 428.792C208.119 423.841 198.818 422.746 199.304 417.224C199.596 413.899 201.089 412.119 203.314 409.679C207.977 404.568 215.576 399.689 220.045 394.429C197.998 370.621 194.879 340.89 214.021 316.867C262.202 256.111 278.225 331.842 232.735 393.567C234.455 395.183 236.284 396.691 238.219 398.199C251.556 408.863 270.483 419.313 296.617 428.792H377.491C375.663 411.879 364.477 407.893 362.864 407.462L317.804 395.721C276.182 373.099 288.121 275.395 290.702 257.512C254.037 229.301 242.242 193.372 241.107 189.917L241.107 189.916C241.05 189.743 241.02 189.652 241.015 189.647C239.295 183.938 247.575 180.812 249.943 186.415C265.428 222.61 299.09 237.905 331.138 223.148C312.857 204.404 328.665 187.708 337.483 180.704L324.794 165.193C323.933 164.116 323.611 162.823 323.718 161.531C323.718 161.528 323.722 161.494 323.73 161.429C324.04 158.761 330.346 104.574 311.029 92.4789C303.176 87.6317 282.099 82.8923 257.793 82.5691C149.171 80.8457 138.203 163.47 184.661 195.679L193.911 201.172ZM221.443 322.792C212.085 334.535 208.106 349.83 213.161 365.451C215.419 372.345 219.508 379.562 225.96 386.779C232.95 376.977 238.434 366.421 242.413 356.185C253.492 327.531 257.686 277.118 221.443 322.792Z"
          fill="#1C1E52"
        />
      </g>
      <g filter="url(#filter1_d_18_4163)">
        <path
          d="M255.484 5.85898C253.203 6.60496 249.293 10.6146 248.595 12.9924C247.896 15.3236 247.896 17.8413 248.501 19.5198C248.781 20.2192 248.92 20.8719 248.781 20.9651C248.688 21.0584 246.547 21.478 244.033 21.851C217.873 25.7674 192.878 37.7031 166.299 58.9171C148.891 72.811 138.65 86.1921 136.695 97.5217C134.927 107.965 141.21 119.482 150.753 123.305C152.661 124.051 154.337 124.33 157.269 124.377C162.575 124.377 161.924 124.703 187.013 109.97C203.397 100.319 215.965 94.9108 225.926 93.139C229.417 92.5329 236.911 92.4397 276.849 92.4397C308.501 92.4397 324.653 92.2532 326.514 91.9268C334.8 90.4349 341.875 83.8609 344.016 75.7017C346.064 67.8222 343.923 57.6116 338.617 49.5923C334.427 43.3447 325.165 35.5118 316.926 31.3623C306.546 26.0938 289.091 21.6645 275.173 20.732L270.146 20.4057L270.332 17.888C270.565 14.2979 269.634 11.6404 267.26 8.98278C264.234 5.62585 259.906 4.46026 255.484 5.85898Z"
          fill="#1C1E52"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M311.52 129.888C305.82 120.95 295.964 119.091 284.83 120.518C277.375 121.473 271.061 125.451 280.983 126.06C290.904 126.669 294.785 124.548 302.806 133.132C308.138 135.626 313.506 133.003 311.52 129.888Z"
        fill="#1C1E52"
      />
      <defs>
        <filter
          id="filter0_d_18_4163"
          x="0.815063"
          y="72.9575"
          width="390.462"
          height="373.313"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_18_4163"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_18_4163"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_18_4163"
          x="132.397"
          y="5.27905"
          width="216.385"
          height="127.099"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_18_4163"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_18_4163"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default SVG
