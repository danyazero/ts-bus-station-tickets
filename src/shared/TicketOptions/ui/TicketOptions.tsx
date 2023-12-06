import st from "./TicketOptions.module.css";
import {NavLink} from "react-router-dom";
import edit from "../../../assets/edit.svg";
import axios from "axios";
import del from "../../../assets/delete.svg";

export const TicketOptions = (props: {full_name: string, id: number}) => {
    return <div className={st.info}>
        <p>{props.full_name}</p>
        <div className={st.other}>
            <NavLink to={'/edit/ticket/' + props.id}>
                <img src={edit} width={20} height={20} alt={"edit"}/>
            </NavLink>
            <a className={st.button} onClick={() => axios.delete('http://localhost:8080/ticket/' + props.id)}>
                <img src={del} width={20} height={20} alt={"delete"}/>
            </a>
        </div>
    </div>
}