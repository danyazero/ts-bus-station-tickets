import {IFlight} from "./../models/interfaces.ts"
import st from "./Flight.module.css"
import {TicketDate} from "../../../shared/TicketDate";
import {FlightDuration} from "../../../shared/FlightDuration";
import {TicketHeader} from "../../../shared/TicketHeader";
import {NavLink} from "react-router-dom";

export const Flight = (props: IFlight) => {

    return (
        <NavLink to={'/book/' + props.id}>
            <div className={st.ticket}>
                <TicketHeader flight_number={props.id} dispatch_city={props.dispatch_city}
                              arrival_city={props.arrival_city} bus_class={props.bus_class}/>

                <div className={st.schedule}>
                    <TicketDate date={props.dispatch_date}/>
                    <FlightDuration dispatch={props.dispatch_date} arrive={props.arrival_date}
                                    seat={props.free_seat - props.purchased + "/" + props.free_seat}/>
                    <TicketDate date={props.arrival_date}/>
                </div>
            </div>
        </NavLink>
    );

}