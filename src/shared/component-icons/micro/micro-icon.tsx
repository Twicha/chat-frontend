import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

export const MicroIcon: FC<Props> = ({ className }): ReactElement => {
  return (
    <svg
      width="18"
      height="25"
      viewBox="0 0 18 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 24C9 24 9 21.9525 9 20.4222M9 20.4222C1 20.4222 1 12.4148 1 12.4148M9 20.4222C17 20.4222 17 12.4148 17 12.4148M9 16.3333C13.2553 16.3333 13.2553 12.0741 13.2553 12.0741V5.25926C13.2553 5.25926 13.2553 1 9 1C4.74468 1 4.74468 5.25926 4.74468 5.25926V12.0741C4.74468 12.0741 4.74468 16.3333 9 16.3333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
