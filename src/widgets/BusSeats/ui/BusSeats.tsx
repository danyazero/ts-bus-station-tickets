import st from "./BusSeats.module.css"
import {useEffect, useState} from "react";
import {Seat} from "../../../shared/Seat";
import {ISeat} from "../model/interfaces.ts";
import {getPassengerFullName} from "../model/getPassengerFullName.ts";
import {GetDataHook} from "../../../features/requestHook";

export const BusSeats = (props: {flight_number: number, seats_max: number, setSeat(seat:number): void}) => {

    const [seat, setSeat] = useState<number>(0)
    // const {data: seats, isLoading, error}: {data: ISeat[], isLoading: boolean, error: any} = useSWR('http://192.168.0.218:8080/api/flight/seats/' + props.flight_number, fetcher)
    // console.log(error)

    const {data, loading, error} = GetDataHook<ISeat[]>('/flight/seats/'+props.flight_number, 2, 300, true)

    const numbersArray = Array.from({ length: props.seats_max }, (_, index) => index + 1);

    useEffect(() => {
        if (seat){
            const full_name = getPassengerFullName(seat, data)
            if (full_name != "--") setSeat(0)
            else props.setSeat(seat)
        }
    }, [seat]);

    return <div>
        <h2>Choose seat:</h2>
        <div className={st.bus}>
            {loading ? <div>Loading...</div> : numbersArray.map((element) =>
                <Seat key={element + "_seat"} setSeat={setSeat} seat={element}
                      full_name={getPassengerFullName(element, data)} engaged={getPassengerFullName(element, data) != "--"} choosed={element == seat}/>)}
        </div>
    </div>
}