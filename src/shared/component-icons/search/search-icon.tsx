import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

export const SearchIcon: FC<Props> = ({ className }): ReactElement => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.5345 13.3244C11.0503 14.6806 9.11497 15.1923 7.83333 15.1923C5.5 15.1923 1 13.4962 1 8.09615C1 2.69615 5.5 1 7.83333 1C10.1667 1 14.6667 2.69615 14.6667 8.09615C14.6667 10.5301 13.7525 12.2116 12.5345 13.3244ZM12.5345 13.3244L18 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
