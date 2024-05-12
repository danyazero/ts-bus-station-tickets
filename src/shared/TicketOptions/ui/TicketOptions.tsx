import st from "./TicketOptions.module.css";
import axios from "axios";
import del from "../../../assets/delete.svg";

export const TicketOptions = (props: {full_name: string, id: number, price?: number}) => {
    return <div className={st.info}>
        <p>{props.full_name}</p>
        <div className={st.other}>
            {/*<NavLink to={'/edit/ticket/' + props.id}>*/}
            {/*    <img src={edit} width={20} height={20} alt={"edit"}/>*/}
            {/*</NavLink>*/}
            {props.price && <p className={st.price}>{props.price}₴</p>}
            <a className={st.button} onClick={() => axios.delete('http://192.168.0.218:8080/api/ticket/' + props.id, {withCredentials: true})}>
                <img src={del} width={20} height={20} alt={"delete"}/>
            </a>
        </div>
    </div>
}