import st from "./PasswordStrength.module.css"
import {useEffect, useState} from "react";
import {element} from "prop-types";

export interface IPasswordStrength {
    password: string
}

export const PasswordStrength = (props: IPasswordStrength) => {
    const [strength, setStrength] = useState(0)

    useEffect(() => {
        let checkStrength = 0;
        if (props.password.length > 6) checkStrength += 1
        if (props.password.search(/\d/) != -1) checkStrength += 1
        if (props.password.search(/[A-Z]/) != -1) checkStrength += 1
        if (props.password.search(/[^a-zA-Z0-9]/) != -1) checkStrength += 1

        setStrength(checkStrength)
    }, [props.password]);

    const strengthLabel = () => {
        switch (strength) {
            case 0: return 'Складність паролю'
            case 1: return 'Слабкий'
            case 2: return 'Нормальний'
            case 3: return 'Сильний'
            case 4: return 'Дуже сильний'
        }
    }

    useEffect(() => {
        console.log("Password strength: " + strength)
    }, [strength]);

    return (
        <div className={st.wrapper}>
            <div className={st.container}>
                {[1, 2, 3, 4].map((element) => <div key={"strength_level_" + element}
                                                    className={st.item + (element <= strength ? " " + st.active : "")}></div>)
                }
            </div>
            <p className={st.strengthLabel}>{strengthLabel()}</p>
        </div>
    )
}