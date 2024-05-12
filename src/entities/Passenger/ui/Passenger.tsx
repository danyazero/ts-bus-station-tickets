import st from "./Passenger.module.css"
import {IPassenger} from "../model/interfaces.ts";
import {useState} from "react";
import {getFirstLetters} from "../model/getFirstLetters.ts";
import {formatUkraineNumber} from "../model/formatUkraineNumber.ts";
import {getRandomColor} from "../model/getRandomColor.ts";
import {Checkbox} from "../../../shared/Checkbox";

export const Passenger = (props: IPassenger & {checked: boolean, setPassenger(document_number: number): void}) => {
    const [background, setBackground] = useState<string>(getRandomColor)

    return <>
        <div className={st.passenger_card}>
            <div className={st.passenger_info}>
                <div className={st.passenger_avatar} style={{background: background}}>
                    {getFirstLetters(props.fullName)}
                </div>
                <div className={st.info}>
                    <div className={st.full_name_id}>
                        <p className={st.full_name}>{props.fullName}</p>
                        <p>#{props.documentNumber}</p>
                    </div>
                    <div className={st.other_info}>
                        <p>{props.email}</p>
                        <p>{formatUkraineNumber(props.phone)}</p>
                    </div>
                </div>
            </div>
            <Checkbox checked={props.checked} setChecked={() => props.setPassenger(props.documentNumber)}/>
        </div>
    </>
}
//style={{background: }}