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
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 13C18.7348 13 18.4804 13.1054 18.2929 13.2929C18.1054 13.4804 18 13.7348 18 14V14.39L16.52 12.91C15.9974 12.3915 15.2911 12.1006 14.555 12.1006C13.8189 12.1006 13.1126 12.3915 12.59 12.91L11.89 13.61L9.41 11.12C8.87783 10.6201 8.17514 10.3418 7.445 10.3418C6.71486 10.3418 6.01217 10.6201 5.48 11.12L4 12.61V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H9C9.26522 6 9.51957 5.89464 9.70711 5.70711C9.89464 5.51957 10 5.26522 10 5C10 4.73478 9.89464 4.48043 9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V14C20 13.7348 19.8946 13.4804 19.7071 13.2929C19.5196 13.1054 19.2652 13 19 13ZM5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15.43L6.9 12.54C7.04691 12.4 7.24206 12.3219 7.445 12.3219C7.64794 12.3219 7.84309 12.4 7.99 12.54L11.16 15.71L15.45 20H5ZM18 19C17.9936 19.1936 17.931 19.3812 17.82 19.54L13.31 15L14.01 14.31C14.0817 14.2368 14.1673 14.1787 14.2617 14.139C14.3561 14.0993 14.4576 14.0789 14.56 14.0789C14.6624 14.0789 14.7639 14.0993 14.8583 14.139C14.9527 14.1787 15.0383 14.2368 15.11 14.31L18 17.22V19ZM21.71 10.29L20 8.57C20.4239 7.88041 20.645 7.08539 20.6381 6.27596C20.6311 5.46653 20.3964 4.67542 19.9607 3.99321C19.525 3.311 18.906 2.76527 18.1746 2.4185C17.4432 2.07173 16.6289 1.93794 15.825 2.03245C15.0211 2.12695 14.26 2.44594 13.629 2.95288C12.9979 3.45983 12.5224 4.13423 12.2568 4.89888C11.9912 5.66353 11.9464 6.48751 12.1273 7.27648C12.3083 8.06545 12.7077 8.78752 13.28 9.36C14.0745 10.1595 15.1529 10.6124 16.28 10.62C17.0861 10.63 17.8791 10.4153 18.57 10L20.29 11.73C20.383 11.8237 20.4936 11.8981 20.6154 11.9489C20.7373 11.9997 20.868 12.0258 21 12.0258C21.132 12.0258 21.2627 11.9997 21.3846 11.9489C21.5064 11.8981 21.617 11.8237 21.71 11.73C21.8068 11.6367 21.8838 11.5249 21.9363 11.4012C21.9889 11.2775 22.016 11.1444 22.016 11.01C22.016 10.8756 21.9889 10.7425 21.9363 10.6188C21.8838 10.4951 21.8068 10.3833 21.71 10.29ZM18 8C17.6762 8.32601 17.2628 8.54851 16.8123 8.63928C16.3619 8.73006 15.8946 8.68502 15.4698 8.50988C15.045 8.33474 14.6817 8.03739 14.4261 7.65553C14.1705 7.27368 14.034 6.82451 14.034 6.365C14.034 5.90549 14.1705 5.45632 14.4261 5.07447C14.6817 4.69261 15.045 4.39526 15.4698 4.22012C15.8946 4.04498 16.3619 3.99994 16.8123 4.09072C17.2628 4.18149 17.6762 4.40399 18 4.73C18.4317 5.16463 18.674 5.75238 18.674 6.365C18.674 6.97762 18.4317 7.56537 18 8Z"
        fill={color}
      />
    </svg>
  )
}

export default SVG
