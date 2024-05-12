import st from "./PasswordInput.module.css"
import {useState} from "react";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";

export interface IPhoneInput {
    value: string,
    autoComplete?: string,
    onChange(value: string): void
}

export const PasswordInput = (props: IPhoneInput) => {
    const [visability, setVisability] = useState(false)

    return (
        <div className={st.container}>
            <input className={st.input} name={props.autoComplete ? props.autoComplete : "password"} autoComplete={"password"} type={visability ? "text" : "password"} value={props.value} placeholder={"Ваш пароль"} onChange={(event) => {
                props.onChange(event.target.value)
            }}/>
            <div className={st.postfix} onClick={() => {
                window.navigator.vibrate(2)
                setVisability(prevState => !prevState)
            }}>
                {visability ? <EyeOutlined style={{color: '#bfdbfe', fontSize: '16px'}}/> : <EyeInvisibleOutlined  style={{color: '#bfdbfe'}}/>}
            </div>
        </div>
    );
}