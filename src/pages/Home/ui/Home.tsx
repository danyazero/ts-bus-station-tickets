import {useEffect, useState} from "react";
import {IFlight} from "../../../entities/Flight/models/interfaces.ts";
import {Flight} from "../../../entities/Flight";
import axios from "axios";

export const Home = () => {
    const [flights, setFlights] = useState<IFlight[]>([])
    useEffect(() => {
        axios.get('http://localhost:8080/flight').then((response: {data: IFlight[]}) => setFlights(response.data))
    }, [])
    return <>
        {flights.map((element, index) => <Flight key={element.id + "_" + index} {...element} />)}
    </>
}