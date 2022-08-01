import {
  CSSProperties,
  FC,
  Fragment,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import classNames from "classnames";

import { useLocation } from "react-router-dom";

import { pxToRem } from "src/shared/helpers";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { closePopupAction, EPopupName } from "../../model";

import "./base-popup.scss";

interface Props {
  name: EPopupName;
  title?: string;
  isWithoutPadding?: boolean;
  isWithoutOverflow?: boolean;
  isMobileBottom?: boolean;
  onClose?: () => void;
}

export const BasePopup: FC<PropsWithChildren<Props>> = ({
  name,
  title,
  isWithoutPadding = false,
  isMobileBottom = true,
  children,
  onClose,
}): ReactElement => {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const { activePopups, showedPopups } = useAppSelector(
    ({ basePopup }) => basePopup
  );

  const [startSwipeYPosition, setStartSwipeYPosition] = useState<number>(0);

  const [currentSwipeYPosition, setCurrentSwipeYPosition] = useState<number>(0);

  const [topOffset, setTopOffset] = useState<string>();

  const [isCatch, setIsCatch] = useState<boolean>(false);

  const [currentRoute, setCurrentRoute] = useState<string>();

  const isCurrentPopupActive: boolean = useMemo(
    () => activePopups.some((popup) => popup.name === name),
    [activePopups, name]
  );

  const isCurrentPopupShowed: boolean = useMemo(
    () => showedPopups.includes(name),
    [showedPopups, name]
  );

  const onCloseHandler = useCallback(() => {
    const callback = () => {
      if (onClose) {
        onClose();
      }
    };

    setCurrentRoute(undefined);

    dispatch(closePopupAction({ callback, name }));
  }, [onClose, name, dispatch]);

  const closePopup = (e: TouchEvent | MouseEvent) => {
    const target = e.target as HTMLElement;
    const currentTarget = e.currentTarget as HTMLElement;

    if (target === currentTarget) {
      onCloseHandler();
    }
  };

  const onSwipeStart = (e: TouchEvent) => {
    if (!e.changedTouches) {
      return;
    }

    setTopOffset("0.1rem");
    setIsCatch(true);

    if (e.changedTouches.length > 0 && e.changedTouches[0].clientY) {
      setStartSwipeYPosition(e.changedTouches[0].clientY);
    }
  };

  const onSwipeEnd = (e: TouchEvent) => {
    if (!e.changedTouches || !startSwipeYPosition) {
      return;
    }

    const diff = currentSwipeYPosition - startSwipeYPosition;

    setStartSwipeYPosition(0);
    setIsCatch(false);

    if (diff > 50) {
      setTopOffset(undefined);
      onCloseHandler();
    } else {
      setTopOffset("0rem");
    }
  };

  const onSwipeMove = (e: TouchEvent) => {
    if (!e.changedTouches) {
      return;
    }

    if (e.changedTouches.length > 0) {
      if (e.changedTouches[0].clientY) {
        setCurrentSwipeYPosition(Number(e.changedTouches[0].clientY));

        if (currentSwipeYPosition && startSwipeYPosition) {
          if (currentSwipeYPosition - startSwipeYPosition > 0) {
            setTopOffset(pxToRem(currentSwipeYPosition - startSwipeYPosition));
          }
        }
      }
    }
  };

  const contentStyle: CSSProperties = {
    transform: isCurrentPopupShowed ? `translateY(${topOffset})` : undefined,
    transition: isCurrentPopupShowed ? "0s" : undefined,
  };

  const onKeyPressEscape = useCallback(
    (e: KeyboardEvent): void => {
      const isEscapeKey: boolean = e.key === "Escape";

      if (isEscapeKey) {
        onCloseHandler();
      }
    },
    [onCloseHandler]
  );

  useEffect(() => {
    if (!currentRoute && isCurrentPopupActive) {
      setCurrentRoute(location.pathname);

      return;
    }

    const isOtherRoute: boolean = currentRoute !== location.pathname;

    if (isCurrentPopupActive && isOtherRoute) {
      onCloseHandler();
    }
  }, [isCurrentPopupActive, currentRoute, location.pathname, onCloseHandler]);

  useEffect(() => {
    if (isCurrentPopupActive) {
      document.addEventListener("keydown", onKeyPressEscape);
    }

    return () => {
      document.removeEventListener("keydown", onKeyPressEscape);
    };
  }, [isCurrentPopupActive, onKeyPressEscape]);

  return (
    <Fragment>
      {isCurrentPopupActive && (
        <div
          className={classNames("base-popup", {
            "base-popup--showed": isCurrentPopupShowed,
            "base-popup--mobile-bottom": isMobileBottom,
          })}
          onMouseDown={closePopup}
        >
          <div
            className={classNames("base-popup__content", {
              "base-popup__content--mobile-bottom": isMobileBottom,
              "base-popup__content--showed": isCurrentPopupShowed,
            })}
            style={contentStyle}
          >
            {isMobileBottom && (
              <div
                className={classNames("base-popup__swipe", {
                  "base-popup__swipe--catch": isCatch,
                })}
                onTouchStart={onSwipeStart}
                onTouchEnd={onSwipeEnd}
                onTouchMove={onSwipeMove}
                onClick={onCloseHandler}
              />
            )}
            {!!title && (
              <h2
                className="base-popup__title"
                onTouchStart={onSwipeStart}
                onTouchEnd={onSwipeEnd}
                onTouchMove={onSwipeMove}
              >
                {title}
                <button
                  type="button"
                  onClick={onCloseHandler}
                  className="base-popup__close-btn"
                >
                  X
                </button>
              </h2>
            )}
            <div
              className={classNames("base-popup__children", {
                "base-popup__children--without-padding": isWithoutPadding,
                "base-popup__children--full-padding": !title,
              })}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
