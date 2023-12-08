import st from "./BusSeats.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Seat} from "../../../shared/Seat";
interface ISeat {seat: number, full_name: string}

export const BusSeats = (props: {flight_number: number, seats_max: number, setSeat(seat:number): void}) => {

    const [seats, setSeats] = useState<ISeat[]>([])
    useEffect(() => {
        axios.get('http://localhost:8080/flight/seats/' + props.flight_number).then((response: {data: ISeat[]}) => setSeats(response.data))
    }, [])

    const numbersArray = Array.from({ length: props.seats_max }, (_, index) => index + 1);

    function getPassengerSurname(seat: number, seats: ISeat[]){
        const find_seat = seats.find(el => el.seat == seat)
        if (find_seat) return find_seat.full_name
        return "--"
    }

    return <>
        <div className={st.bus}>
            {seats && numbersArray.map((element) =>
                <Seat key={element + "_seat"} setSeat={props.setSeat} seat={element}
                      full_name={getPassengerSurname(element, seats)} engaged={getPassengerSurname(element, seats) != "--"}/>)}
        </div>
    </>
}