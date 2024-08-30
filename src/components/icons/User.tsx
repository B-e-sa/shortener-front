import { ComponentProps } from "react";

export default function UserIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 7a3 3 0 100-6 3 3 0 000 6zM14 12a3 3 0 00-3-3H5a3 3 0 00-3 3v3h12v-3z"
      />
    </svg>
  );
}
