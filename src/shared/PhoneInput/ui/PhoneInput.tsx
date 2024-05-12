import st from "./PhoneInput.module.css";
import { ChangeEvent } from "react";

export interface IPhoneInput {
  value: string;
  autoFocus: boolean;
  onChange(value: string): void;
}

export const PhoneInput = (props: IPhoneInput) => {
  const getInputNumbersValue = (input: string) => {
    return input.replace(/\D/g, "");
  };

  const onPhoneInput = function (e: ChangeEvent<HTMLInputElement>) {
    const inputNumbersValue = getInputNumbersValue(e.target.value);
    let formattedInputValue = "";

    if (!inputNumbersValue || inputNumbersValue.length == 0) {
      props.onChange("");
    }

    if (inputNumbersValue.length > 0) {
      formattedInputValue += "(" + inputNumbersValue.substring(0, 3);
    }
    if (inputNumbersValue.length >= 4) {
      formattedInputValue += ") " + inputNumbersValue.substring(3, 6);
    }
    if (inputNumbersValue.length >= 7) {
      formattedInputValue += " " + inputNumbersValue.substring(6, 8);
    }
    if (inputNumbersValue.length >= 9) {
      formattedInputValue += " " + inputNumbersValue.substring(8, 10);
    }

    props.onChange(formattedInputValue);
  };

  return (
    <div className={st.container}>
      <div className={st.prefix}>
        <p>+38</p>
      </div>
      <input
        className={st.input}
        maxLength={15}
        autoFocus={props.autoFocus}
        value={props.value}
        name={"phone"}
        autoComplete={"phone"}
        type={"tel"}
        placeholder={"(095) 509 14 10"}
        onChange={onPhoneInput}
      />
    </div>
  );
};
