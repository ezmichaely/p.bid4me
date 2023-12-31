import { SvgProps } from "@/types/interface"

export default function WalletIcon({ size, fill }: SvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50" fill="none">
      <path d="M35.7455 0C34.8818 0 33.8636 0.177273 32.4727 0.545455C28.9727 1.46818 8.45 7.14545 8.14546 7.23636C5.1 8.38182 3.17273 9.50909 1.96364 10.8364C3.38182 9.87727 5.07273 9.27273 6.98182 9.27273H39.5636V5.38182C39.5636 3.5 39.55 0 35.7455 0ZM6.98182 11.6C2.65455 11.6 0 15.6682 0 18.5818V43.4545C0 47.0591 2.94091 50 6.54546 50H42.3273C45.9318 50 48.8727 47.0591 48.8727 43.4545V18.4C48.8727 14.8409 45.5455 11.6 41.8909 11.6H6.98182ZM40.1455 27.8909C41.75 27.8909 43.0545 29.1909 43.0545 30.8C43.0545 32.4091 41.75 33.7091 40.1455 33.7091C38.5364 33.7091 37.2364 32.4091 37.2364 30.8C37.2364 29.1909 38.5364 27.8909 40.1455 27.8909Z" fill="url(#paint0_linear_110_133)" />
      <defs>
        <linearGradient id="paint0_linear_110_133" x1="24.4364" y1="16.4291" x2="24.4364" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDB235" />
          <stop offset="1" stopColor="#F7C95F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
