import { ComponentProps } from "react";

export function SiteLogo(props: ComponentProps<"svg">) {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.2812 2.1875H19.7188C10.0365 2.1875 2.1875 10.0365 2.1875 19.7188V29.2812C2.1875 38.9635 10.0365 46.8125 19.7188 46.8125H29.2812C38.9635 46.8125 46.8125 38.9635 46.8125 29.2812V19.7188C46.8125 10.0365 38.9635 2.1875 29.2812 2.1875Z"
        strokeWidth="4"
      />
    </svg>
  );
}
