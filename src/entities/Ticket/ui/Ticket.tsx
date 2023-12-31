import {ITicket} from "./../models/interfaces.ts"
import st from "./Ticket.module.css"
import {TicketDate} from "../../../shared/TicketDate";
import {FlightDuration} from "../../../shared/FlightDuration";
import {TicketOptions} from "../../../shared/TicketOptions";
import {TicketHeader} from "../../../shared/TicketHeader";

export const Ticket = (props: ITicket) => {

    return (
        <div className={st.ticket}>
            <TicketHeader flight_number={props.flight_number} dispatch_city={props.dispatch_city}
                          arrival_city={props.arrival_city} bus_class={props.bus_class}/>

            <div className={st.schedule}>
                <TicketDate date={props.dispatch_date}/>
                <FlightDuration dispatch={props.dispatch_date} arrive={props.arrival_date} seat={"P"+props.seat}/>
                <TicketDate date={props.arrival_date}/>
            </div>

            <TicketOptions full_name={props.full_name} id={props.id}/>
        </div>
    );

}