import {
  FC,
  Fragment,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  TouchEvent,
  useMemo,
} from "react";

import classNames from "classnames";

import { Link } from "react-router-dom";

import {
  TBaseButtonSize,
  TBaseButtonColor,
  TBaseButtonBorderRadius,
  TBaseButtonFontWeight,
} from "../../model";

import "./base-button.scss";

interface Props {
  buttonType?: "submit" | "reset" | "button";
  block?: boolean;
  size?: TBaseButtonSize;
  color?: TBaseButtonColor;
  borderRadius?: TBaseButtonBorderRadius;
  outline?: boolean;
  disabled?: boolean;
  to?: string;
  linkTarget?: string;
  linkRel?: string;
  onClick?: () => void;
  fontWeight?: TBaseButtonFontWeight;
  className?: string;
  ariaLabel?: string;
  isLoading?: boolean;
}

export const BaseButton: FC<PropsWithChildren<Props>> = ({
  buttonType = "button",
  block = true,
  size,
  color,
  borderRadius = "default",
  outline,
  disabled,
  to,
  onClick,
  linkTarget,
  linkRel,
  fontWeight = "bold",
  className,
  ariaLabel,
  isLoading,
  children,
}): ReactElement => {
  const classes: string = useMemo(
    () =>
      classNames("base-button", className, {
        "base-button--block": block,
        "base-button--outline": outline,
        "base-button--disabled": disabled,
        "base-button--loading": isLoading,
        [`base-button--size_${size}`]: size,
        [`base-button--color_${color}`]: color,
        [`base-button--border-radius_${borderRadius}`]: borderRadius,
        [`base-button--font-weight_${fontWeight}`]: fontWeight,
      }),
    [
      className,
      block,
      outline,
      disabled,
      isLoading,
      size,
      color,
      borderRadius,
      fontWeight,
    ]
  );

  const localDisabled: boolean | undefined = useMemo(
    () => disabled || isLoading,
    [disabled, isLoading]
  );

  const isExternalLink: boolean | undefined = to?.includes("://");

  const onClickHandler = (e: MouseEvent | TouchEvent): void => {
    if (localDisabled) {
      e.preventDefault();
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <Fragment>
      {to && isExternalLink && (
        <a
          href={to}
          className={classes}
          target={linkTarget}
          rel={linkRel}
          aria-label={ariaLabel}
        >
          <div className="base-button__content">{children}</div>
        </a>
      )}

      {to && !isExternalLink && (
        <Link
          to={to}
          className={classes}
          target={linkTarget}
          rel={linkRel}
          aria-label={ariaLabel}
          onClick={onClickHandler}
        >
          <div className="base-button__content">{children}</div>
        </Link>
      )}

      {!to && (
        <button
          disabled={localDisabled}
          type={buttonType}
          className={classes}
          onClick={onClickHandler}
          aria-label={ariaLabel}
        >
          <div className="base-button__content">{children}</div>
          {isLoading && (
            <div className="base-button__loading">
              <svg
                className="base-button__loading-item"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0.8C7 0.358172 7.35906 -0.00414459 7.79868 0.0399646C8.939 0.154379 10.0447 0.512852 11.0393 1.09465C12.2648 1.81149 13.2774 2.84153 13.9732 4.07903C14.6691 5.31653 15.023 6.71692 14.9988 8.13643C14.9746 9.55595 14.5731 10.9434 13.8355 12.1565C13.0978 13.3696 12.0507 14.3645 10.8015 15.0391C9.55229 15.7137 8.14607 16.0438 6.72717 15.9953C5.30828 15.9469 3.92783 15.5218 2.72753 14.7636C1.75335 14.1482 0.926325 13.3314 0.300066 12.3716C0.05863 12.0016 0.215112 11.5161 0.607393 11.3128C0.999676 11.1095 1.47854 11.2663 1.72916 11.6302C2.21847 12.3406 2.84804 12.9472 3.58203 13.4109C4.54226 14.0174 5.64662 14.3575 6.78174 14.3963C7.91685 14.435 9.04183 14.171 10.0412 13.6313C11.0405 13.0916 11.8783 12.2956 12.4684 11.3252C13.0585 10.3548 13.3797 9.24476 13.3991 8.10915C13.4184 6.97354 13.1353 5.85323 12.5786 4.86322C12.0219 3.87322 11.2118 3.04919 10.2315 2.47572C9.48209 2.03737 8.65387 1.75749 7.79794 1.64993C7.35955 1.59485 7 1.24183 7 0.8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          )}
        </button>
      )}
    </Fragment>
  );
};
