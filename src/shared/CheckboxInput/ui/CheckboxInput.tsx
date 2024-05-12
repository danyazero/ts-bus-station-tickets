import st from "./CheckboxInput.module.css"
import React, {useEffect, useState} from "react";

export interface IPhoneInput {
    title: string,
    onChange(value: boolean): void
}

export const CheckboxInput = (props: IPhoneInput) => {
    const [value, setValue] = useState(false)

    const onClick = () => {
        setValue(prevState => !prevState)
        window.navigator.vibrate(2)
    }

    useEffect(() => {
        props.onChange(value)
    }, [value]);

    return (
        <div className={st.container} onClick={onClick}>
                <input className={st.input} name={"remember"} readOnly={true} type={"checkbox"} checked={value}/>
            <label>{props.title}</label>
        </div>
    );
}