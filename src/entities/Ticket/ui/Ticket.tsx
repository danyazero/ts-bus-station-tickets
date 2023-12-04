import {ITicket} from "./../models/interfaces.ts"
import st from "./Ticket.module.css"
import {TicketDate} from "../../../shared/TicketDate";

export const Ticket = (props: ITicket) => {

    return (
        <div className={st.ticket}>
            <div className={st.header}>
                <div className={st.head_text}>
                    <p className={st.flight_number}>
                        #{props.flight_number}
                    </p>
                    <p className={st.places}>{props.dispatch_city} - {props.arrival_city}</p>
                </div>
                <div className={st.bus_class}>{props.bus_class}</div>
            </div>

            <div className={st.schedule}>
                <TicketDate date={props.dispatch_date}/>
                <TicketDate date={props.arrival_date}/>
            </div>
        </div>
    );
}