import {useEffect, useState} from "react";
import {ITicket} from "../../../entities/Ticket/models/interfaces.ts";
import axios from "axios";
import {Ticket} from "../../../entities/Ticket";

export const Profile = () => {
    const [tickets, setTickets] = useState<ITicket[]>([])

    useEffect(() => {
        axios.get('http://localhost:8080/ticket').then((response: {data: ITicket[]}) => setTickets(response.data))
    }, [])

    return (
        <>
            {tickets.map((element, index) => <Ticket key={element.id + "_" + index} id={element.id} flight_number={element.flight_number} seat={element.seat} bag_weight={element.bag_weight} full_name={element.full_name} email={element.email} dispatch_city={element.dispatch_city} arrival_city={element.arrival_city} bus_class={element.bus_class} dispatch_date={element.dispatch_date} arrival_date={element.arrival_date}/>)}
        </>
    );
}
