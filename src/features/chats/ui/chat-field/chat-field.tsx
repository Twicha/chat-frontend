import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  ReactElement,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { MicroIcon, SendIcon } from "src/shared/component-icons";
import { pxToRem } from "src/shared/helpers";
import "./chat-field.scss";

interface Props {
  className?: string;
}

export const ChatField: FC<Props> = ({ className }): ReactElement => {
  const fieldRef = useRef<HTMLTextAreaElement | null>(null);

  const [value, setValue] = useState<string>("");

  const setFieldHeightHandler = () => {
    if (fieldRef.current) {
      fieldRef.current.style.height = "var(--field-height)";
      fieldRef.current.style.height = pxToRem(fieldRef.current.scrollHeight);
    }
  };

  const onRecordAudioHandler = () => {
    alert("Functionality is not working yet");
  };

  const onSubmitHandler = () => {
    const emptyValue = !value.trim();

    if (!emptyValue) {
      console.log(value);

      setValue("");

      if (fieldRef.current) {
        fieldRef.current.style.height = "var(--field-height)";
      }
    }
  };

  const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const isShiftUsed: boolean = e.shiftKey;

    const isEnterKey: boolean = e.code === "Enter";

    if (!isShiftUsed && isEnterKey) {
      e.preventDefault();

      onSubmitHandler();
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value: inputValue } = e.target;

    setFieldHeightHandler();

    setValue(inputValue);
  };

  return (
    <div className={classNames("chat-field", className)}>
      <textarea
        className="chat-field__textarea"
        placeholder="Сообщение"
        ref={fieldRef}
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <button
        className="chat-field__btn"
        onClick={value ? onSubmitHandler : onRecordAudioHandler}
      >
        {value ? (
          <SendIcon className="chat-field__btn-icon chat-field__btn-icon--send" />
        ) : (
          <MicroIcon className="chat-field__btn-icon" />
        )}
      </button>
    </div>
  );
};
