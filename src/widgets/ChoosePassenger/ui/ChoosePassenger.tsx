import {useEffect, useState} from "react";
import {IPassenger} from "../models.ts";
import {Passenger} from "../../../entities/Passenger";
import axios from "axios";

export const ChoosePassenger = () => {
    const [passengers, setPassengers] = useState<IPassenger[]>([])
    const [selected, setSelected] = useState<number>(0)
    useEffect(() => {
        axios.get('http://localhost:8080/passenger').then((response: {data: IPassenger[]}) => setPassengers(response.data))

    }, [])
    // useEffect(() => {
    //     setSelected(passengers[0].document_number)
    // }, [passengers]);

    return <>
        <div>
            {passengers && passengers.map((element, index) =>
                <Passenger key={element.full_name + "_" + index} full_name={element.full_name}
                           document_number={element.document_number} email={element.email}
                           number={element.number} checked={element.document_number == selected}
                           setPassenger={setSelected}/>)}
        </div>
    </>
}