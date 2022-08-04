import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

export const PlusIcon: FC<Props> = ({ className }): ReactElement => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
};
