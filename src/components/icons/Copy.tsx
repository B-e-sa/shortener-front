import { ComponentProps } from "react";

export default function CopyIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 13a3 3 0 013-3h5a3 3 0 013 3v5a3 3 0 01-3 3h-5a3 3 0 01-3-3v-5z"
        stroke={props.fill}
        fill="none"
        strokeWidth={2}
      />
      <path
        d="M14 6.208V6a3 3 0 00-3-3H6a3 3 0 00-3 3v5a3 3 0 003 3h.208"
        stroke={props.fill}
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
