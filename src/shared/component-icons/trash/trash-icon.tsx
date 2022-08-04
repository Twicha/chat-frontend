import { FC, ReactElement } from "react";

interface Props {
  className?: string;
}

export const TrashIcon: FC<Props> = ({ className }): ReactElement => {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.58088 11.2251C7.54743 10.8123 7.18563 10.5047 6.77277 10.5382C6.35991 10.5716 6.05233 10.9334 6.08578 11.3463L7.58088 11.2251ZM6.91912 21.632C6.95257 22.0449 7.31437 22.3524 7.72723 22.319C8.14009 22.2855 8.44767 21.9237 8.41422 21.5109L6.91912 21.632ZM15.5809 11.3463C15.6143 10.9334 15.3068 10.5716 14.8939 10.5382C14.481 10.5047 14.1192 10.8123 14.0858 11.2251L15.5809 11.3463ZM13.2524 21.5109C13.219 21.9237 13.5266 22.2855 13.9394 22.319C14.3523 22.3524 14.7141 22.0449 14.7476 21.632L13.2524 21.5109ZM11.5833 11.2857C11.5833 10.8715 11.2475 10.5357 10.8333 10.5357C10.4191 10.5357 10.0833 10.8715 10.0833 11.2857H11.5833ZM10.0833 21.5714C10.0833 21.9856 10.4191 22.3214 10.8333 22.3214C11.2475 22.3214 11.5833 21.9856 11.5833 21.5714H10.0833ZM4.16667 22.0857L3.42632 22.2057L3.42901 22.2222L3.43243 22.2387L4.16667 22.0857ZM17.6667 22.0857L18.4009 22.2387L18.4043 22.2222L18.407 22.2057L17.6667 22.0857ZM6.08578 11.3463L6.91912 21.632L8.41422 21.5109L7.58088 11.2251L6.08578 11.3463ZM14.0858 11.2251L13.2524 21.5109L14.7476 21.632L15.5809 11.3463L14.0858 11.2251ZM10.0833 11.2857V21.5714H11.5833V11.2857H10.0833ZM2.16667 6.93571C2.09659 6.93571 1.97131 6.90776 1.88385 6.843C1.84743 6.81602 1.81923 6.78428 1.79801 6.74198C1.77688 6.69984 1.75 6.62194 1.75 6.48571H0.25C0.25 7.20137 0.55548 7.72579 0.991145 8.04843C1.3898 8.34366 1.84785 8.43571 2.16667 8.43571V6.93571ZM1.75 6.48571C1.75 6.18098 1.91943 5.86364 2.25833 5.59428C2.6022 5.32097 3.02472 5.17857 3.33333 5.17857V3.67857C2.64195 3.67857 1.8978 3.96475 1.32501 4.42001C0.747238 4.87922 0.25 5.59045 0.25 6.48571H1.75ZM19.8333 8.43571C20.1521 8.43571 20.6102 8.34366 21.0089 8.04843C21.4445 7.72579 21.75 7.20137 21.75 6.48571H20.25C20.25 6.62194 20.2231 6.69984 20.202 6.74198C20.1808 6.78428 20.1526 6.81602 20.1161 6.843C20.0287 6.90776 19.9034 6.93571 19.8333 6.93571V8.43571ZM21.75 6.48571C21.75 5.59045 21.2528 4.87922 20.675 4.42001C20.1022 3.96475 19.3581 3.67857 18.6667 3.67857V5.17857C18.9753 5.17857 19.3978 5.32097 19.7417 5.59428C20.0806 5.86364 20.25 6.18098 20.25 6.48571H21.75ZM18.6667 3.67857H7.16667V5.17857H18.6667V3.67857ZM7.16667 3.67857H3.33333V5.17857H7.16667V3.67857ZM7.91667 4.42857C7.91667 3.86895 7.96404 3.17403 8.24738 2.63434C8.38113 2.37958 8.56238 2.17013 8.81545 2.01974C9.06978 1.8686 9.44235 1.75 10 1.75V0.25C9.22432 0.25 8.57606 0.417118 8.04913 0.730261C7.52095 1.04415 7.16054 1.47756 6.91929 1.93709C6.45262 2.82597 6.41667 3.84533 6.41667 4.42857H7.91667ZM15.75 4.42857C15.75 3.80879 15.664 2.79259 15.1478 1.90781C14.5955 0.96091 13.5975 0.25 12 0.25V1.75C13.0691 1.75 13.5712 2.18195 13.8522 2.66362C14.1694 3.20741 14.25 3.9055 14.25 4.42857H15.75ZM12 0.25H10V1.75H12V0.25ZM2.16667 8.43571H2.66667V6.93571H2.16667V8.43571ZM2.66667 8.43571H19.8333V6.93571H2.66667V8.43571ZM7 24.25C6.66157 24.25 6.25653 24.1587 5.88945 23.8606C5.52524 23.5649 5.12438 23.0055 4.9009 21.9327L3.43243 22.2387C3.70895 23.566 4.25254 24.4637 4.94389 25.0251C5.63236 25.5841 6.39399 25.75 7 25.75V24.25ZM4.90701 21.9658C4.64553 20.3521 3.80408 11.749 3.41334 7.61514L1.91999 7.75629C2.30703 11.851 3.15447 20.5279 3.42632 22.2057L4.90701 21.9658ZM14.8333 25.75C15.4393 25.75 16.201 25.5841 16.8894 25.0251C17.5808 24.4637 18.1244 23.566 18.4009 22.2387L16.9324 21.9327C16.709 23.0055 16.3081 23.5649 15.9439 23.8606C15.5768 24.1587 15.1718 24.25 14.8333 24.25V25.75ZM18.407 22.2057C18.6789 20.5279 19.5263 11.851 19.9133 7.75629L18.42 7.61514C18.0293 11.749 17.1878 20.3521 16.9263 21.9658L18.407 22.2057ZM14.8333 24.25H7V25.75H14.8333V24.25Z"
        fill="currentColor"
      />
    </svg>
  );
};
