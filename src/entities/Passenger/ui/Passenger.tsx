import st from "./Passenger.module.css"
import {IPassenger} from "../model/interfaces.ts";

export const Passenger = (props: IPassenger & {checked: boolean, setPassenger(document_number: number): void}) => {

    function getFirstLetters(full_name: string){
        const full_name_array : string[] = full_name.split(" ")
        return full_name_array[0][0] + full_name_array[1][0]
    }

    // function getRandomColor(): string {
    //     const colors: string[] = ["#0bbe75", "#f19097", "#8e96a0", "#5438dc", "#e74e58"]
    //     const random_num = Math.floor(Math.random() * 5);
    //     return colors[random_num]
    // }

    function formatUkraineNumber(number: number){
        return number.toString().replace(/^(\d{3})(\d{3})(\d{2})(\d{4})$/, '+$1 $2 $3 $4');
    }

    return <>
        <div className={st.passenger_card}>
            <div className={st.passenger_info}>
                <div className={st.passenger_avatar} style={{background: "#f19097"}}>
                    {getFirstLetters(props.full_name)}
                </div>
                <div className={st.info}>
                    <div className={st.full_name_id}>
                        <p className={st.full_name}>{props.full_name}</p>
                        <p>#{props.document_number}</p>
                    </div>
                    <div className={st.other_info}>
                        <p>{props.email}</p>
                        <p>{formatUkraineNumber(props.number)}</p>
                    </div>
                </div>
            </div>
            <div onClick={() => props.setPassenger(props.document_number)} className={st.checkbox}>
                <div style={{background: props.checked ? "#1d3a8a" : "#9ca3af"}} className={st.check}></div>
            </div>
        </div>
    </>
}
//style={{background: }}