import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

export const PhoneIcon: FC<Props> = ({ className }): ReactElement => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.9474 17.7371C3.16546 14.6217 1 6.49551 1 1.97298C1 1.1946 1.63158 1 1.94737 1H4.78947C5.54737 1 5.73684 1.64865 5.73684 1.97297C5.73684 1.97297 5.73684 4.92639 5.73684 6.15481C5.73684 7.38323 3.16977 9.30141 2.53819 9.27027M10.9474 17.7371C12.9316 18.5314 15.2809 19 18.0526 19C18.3684 19 19 18.8054 19 18.027C19 17.2486 19 16.0811 19 15.5946C19 15.2703 18.8105 14.6216 18.0526 14.6216C17.2947 14.6216 15.2105 14.6216 14.2632 14.6216C13.6316 14.5905 12.0842 15.17 10.9474 17.7371Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};
