import st from "./BusSeats.module.css"
import {useEffect, useState} from "react";
import {Seat} from "../../../shared/Seat";
import {ISeat} from "../model/interfaces.ts";
import {getPassengerFullName} from "../model/getPassengerFullName.ts";
import useSWR from "swr";
import {fetcher} from "../../../api.ts";

export const BusSeats = (props: {flight_number: number, seats_max: number, setSeat(seat:number): void}) => {

    const [seat, setSeat] = useState<number>(0)
    const {data: seats, isLoading}: {data: ISeat[], isLoading: boolean} = useSWR('http://localhost:8080/flight/seats/' + props.flight_number, fetcher)

    const numbersArray = Array.from({ length: props.seats_max }, (_, index) => index + 1);

    useEffect(() => {
        if (seat){
            const full_name = getPassengerFullName(seat, seats)
            if (full_name != "--") setSeat(0)
            else props.setSeat(seat)
        }
    }, [seat]);

    return <div>
        <h2>Choose seat:</h2>
        <div className={st.bus}>
            {isLoading ? <div>Loading...</div> : numbersArray.map((element) =>
                <Seat key={element + "_seat"} setSeat={setSeat} seat={element}
                      full_name={getPassengerFullName(element, seats)} engaged={getPassengerFullName(element, seats) != "--"} choosed={element == seat}/>)}
        </div>
    </div>
}