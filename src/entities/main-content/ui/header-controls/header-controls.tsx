import classNames from "classnames";
import { FC, ReactElement } from "react";
import {
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  TripleDotIcon,
} from "src/shared/component-icons";
import "./header-controls.scss";

interface Props {
  className?: string;
}

export const HeaderControls: FC<Props> = ({ className }): ReactElement => {
  const notFunctionalHandler = () => {
    alert("Functionality is not working yet");
  };

  return (
    <div className={classNames("header-controls", className)}>
      <button
        className="header-controls__btn around-hover-btn"
        onClick={notFunctionalHandler}
      >
        <PhoneIcon className="header-controls__btn-icon" />
      </button>
      <button
        className="header-controls__btn around-hover-btn"
        onClick={notFunctionalHandler}
      >
        <SearchIcon className="header-controls__btn-icon" />
      </button>
      <button
        className="header-controls__btn around-hover-btn"
        onClick={notFunctionalHandler}
      >
        <TripleDotIcon className="header-controls__btn-icon" />
      </button>
    </div>
  );
};
