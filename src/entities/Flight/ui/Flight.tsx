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
                <TicketHeader flight_number={props.id} dispatch_city={props.dispatchCity}
                              arrival_city={props.arrivalCity} bus_class={props.busClass} price={props.price}/>

                <div className={st.schedule}>
                    <TicketDate date={props.dispatchDate}/>
                    <FlightDuration dispatch={props.dispatchDate} arrive={props.arrivalDate}
                                    seat={props.freeSeat - props.purchased + "/" + props.freeSeat}/>
                    <TicketDate date={props.arrivalDate}/>
                </div>
            </div>
        </NavLink>
    );

}