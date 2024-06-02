import st from "./AddPassanger.module.css"
import {useState} from "react";
import {TextInput} from "../../../shared/TextInput";
import {PhoneInput} from "../../../shared/PhoneInput";
import {InputContainer} from "../../../shared/InputContainer";
import {DatePicker} from "../../../shared/DatePicker/ui/DatePicker.tsx";
import {PrimaryButton} from "../../../shared/PrimaryButton";
import axios from "axios";


export const AddPassenger = () => {
    const [document, setDocument] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [opened, setOpen] = useState<boolean>(false)

    function isFilled() {
        let counter = 0
        if (document.length > 4) counter++
        if (fullname.length > 4) counter++
        if (email.length > 4) counter++
        if (phone.length > 4) counter++

        return counter == 4
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formattedPhone = "38" + phone.replace(/\D/g, '');
        let result = axios.post(`http://192.168.0.218:8080/api/passenger/new`, {document, fullName: fullname, email, phone: formattedPhone}, {withCredentials: true})
        console.log(result)
    }

    return (
        <div>
            {opened ? <form onSubmit={onSubmit} className={st.form}>
                <InputContainer label={"Номер документу"}>
                    <TextInput value={document} placeholder={"Введіть номер документу"}
                               autocomplete={"passport"} onChange={setDocument}/>
                </InputContainer>
                <InputContainer label={"ПІБ"}>
                    <TextInput value={fullname} placeholder={"Enter full name"} autocomplete={"full_name"}
                               onChange={setFullname}/>
                </InputContainer>
                <InputContainer label={"Електрона пошта"}>
                    <TextInput value={email} placeholder={"Введіть електрону пошту"}
                               autocomplete={"email"} onChange={setEmail}/>
                </InputContainer>

                <InputContainer label={"Номер телефону"}>
                    <PhoneInput value={phone} autoFocus={false} onChange={setPhone}/>
                </InputContainer>
                <PrimaryButton title={"Додати!"} disabled={!isFilled()}/>

            </form> : <form onSubmit={(event) => {
                event.preventDefault()
                setOpen(true)
            }}><PrimaryButton title={"Додати пасажира"} disabled={false}/></form>}
        </div>
    );
}