import {ITicket} from "./../models/interfaces.ts"
import st from "./Ticket.module.css"
import {TicketDate} from "../../../shared/TicketDate";
import {FlightDuration} from "../../../shared/FlightDuration";
import {TicketOptions} from "../../../shared/TicketOptions";
import {TicketHeader} from "../../../shared/TicketHeader";

export const Ticket = (props: ITicket) => {

    return (
        <div className={st.ticket}>
            <TicketHeader flight_number={props.flightNumber} dispatch_city={props.dispatchCity}
                          arrival_city={props.arrivalCity} bus_class={props.busClass}/>

            <div className={st.schedule}>
                <TicketDate date={props.dispatchDate}/>
                <FlightDuration dispatch={props.dispatchDate} arrive={props.arrivalDate} seat={"P"+props.seat}/>
                <TicketDate date={props.arrivalDate}/>
            </div>

            <TicketOptions full_name={props.fullName} id={props.id} price={props.calculatedPrice}/>
        </div>
    );

}