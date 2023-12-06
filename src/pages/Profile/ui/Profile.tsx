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
            {tickets.map((element, index) => <Ticket key={element.id + "_" + index} {...element}/>)}
        </>
    );
}
