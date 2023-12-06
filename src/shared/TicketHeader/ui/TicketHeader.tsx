import st from "./TicketHeader.module.css";

export const TicketHeader = (props: {flight_number: number, dispatch_city: string, arrival_city: string, bus_class: string}) => {
    return <div className={st.header}>
        <div className={st.head_text}>
            <p className={st.flight_number}>
                #{props.flight_number}
            </p>
            <p className={st.places}>{props.dispatch_city + " ->"} {props.arrival_city}</p>
        </div>
        <div className={st.bus_class}>{props.bus_class}</div>
    </div>
}