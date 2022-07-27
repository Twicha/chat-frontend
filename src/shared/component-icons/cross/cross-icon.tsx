import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

export const CrossIcon: FC<Props> = ({ className }): ReactElement => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.6492 2.04853C16.1179 1.5799 16.1179 0.820101 15.6492 0.351472C15.1806 -0.117157 14.4208 -0.117157 13.9522 0.351472L7.99986 6.30378L2.04755 0.351472C1.57892 -0.117157 0.819124 -0.117157 0.350495 0.351472C-0.118134 0.820101 -0.118134 1.5799 0.350495 2.04853L6.30281 8.00084L0.350495 13.9532C-0.118134 14.4218 -0.118134 15.1816 0.350495 15.6502C0.819124 16.1188 1.57892 16.1188 2.04755 15.6502L7.99986 9.6979L13.9522 15.6502C14.4208 16.1188 15.1806 16.1188 15.6492 15.6502C16.1179 15.1816 16.1179 14.4218 15.6492 13.9532L9.69692 8.00084L15.6492 2.04853Z"
        fill="currentColor"
      />
    </svg>
  );
};
