import {BusSeats} from "../../../widgets/BusSeat";
import {ChoosePassenger} from "../../../widgets/ChoosePassenger";
import {useEffect, useState} from "react";

export const BookSeat = () => {
    const [seat, setSeat] = useState<number>(0)

    useEffect(() => {
        console.log(seat)
    }, [seat]);

    return <>
        {/*<Passenger full_name={"Mozzhukhin Daniil Andrievich"} document_number={172856} email={"danyamozzhukhin@gmail.com"} number={380960639371} checked={true}/>*/}
        <ChoosePassenger/>
        <BusSeats flight_number={1} seats_max={56} setSeat={setSeat}/>
    </>
}