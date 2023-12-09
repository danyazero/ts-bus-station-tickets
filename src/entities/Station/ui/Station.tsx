import st from "./Station.module.css"
import {Checkbox} from "../../../shared/Checkbox";
import {IStation} from "../model.ts";

export const Station = (props: IStation & {checked: boolean, setStation(station: number)}) => {
    return <div id={props.id} className={st.station}>
        <Checkbox checked={props.checked} setChecked={() => props.setStation(props.id)}/>
        <p>{props.city}</p>
    </div>
}