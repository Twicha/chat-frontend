import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

export const SendIcon: FC<Props> = ({ className }): ReactElement => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 10.5H3.06897M3.06897 10.5C1.41379 14.8969 1 17.5505 1 18.3276C1 19.7932 2.14943 20.0486 2.72414 19.9931C5.89655 19.9931 21 12.123 21 10.5C21 8.87699 5.89655 1.00689 2.72414 1.00689C2.14943 0.951379 1 1.20675 1 2.67235C1 3.44954 1.41379 6.10314 3.06897 10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
