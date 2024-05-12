import {PhoneInput} from "../../../shared/PhoneInput";
import st from "./Login.module.css"
import {useState} from "react";
import {PasswordInput} from "../../../shared/PasswordInput";
import {PrimaryButton} from "../../../shared/PrimaryButton";
import axios, {AxiosError, AxiosResponse} from "axios";
import {CheckboxInput} from "../../../shared/CheckboxInput";
import {Alert} from "antd";

export const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState<{ code: string, message: string }[]>([])

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formattedPhone = "38" + phone.replace(/\D/g, '');
        console.log(formattedPhone)
        try {
            const result = await axios.post('http://192.168.0.218:8080/api/login', {phone: formattedPhone, password, remember}, {withCredentials: true})
            if (result.status == 200) {
                // document.location.href = '/profile'
            }
        }catch (error) {
            setErrors(error.response.data.errors)
        }

    }

    return (
        <div className={st.loginFormContainer}>
            <form onSubmit={onSubmit} className={st.loginForm}>
                {(errors && errors.length) ? errors.map((element, index) => <Alert className={st.alertError}
                                                                                   key={element.code + "_" + index}
                                                                                   message={element.message}
                                                                                   type="error"
                                                                                   showIcon/>) : <></>}
                <PhoneInput value={phone} autoFocus={true} onChange={setPhone}/>
                <PasswordInput value={password} onChange={setPassword}/>
                <CheckboxInput title={"Запамʼятати мене"} onChange={setRemember}/>
                <PrimaryButton title={"Вхід"} disabled={phone.length < 11 || password.length < 8}/>
            </form>
        </div>
    );
}
