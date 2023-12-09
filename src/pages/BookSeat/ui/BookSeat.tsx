import BusSeats from "../../../widgets/BusSeats";
import ChoosePassenger from "../../../widgets/ChoosePassenger";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IFlight} from "../../../entities/Flight/models/interfaces.ts";
import useSWR from "swr";
import {fetcher} from "../../../api.ts";
import {Flight} from "../../../entities/Flight";
import axios from "axios";
import FlightStations from "../../../widgets/FlightStations";

export const BookSeat = () => {
    let { id } = useParams();
    const [seat, setSeat] = useState<number>(0)
    const [passenger, setPassenger] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)
    const {data, isLoading}: {data: IFlight, isLoading: boolean} = useSWR('http://localhost:8080/flight/' + id, fetcher)

    async function bookSeat(){
        console.log({seat, passenger, weight})
        const result = await axios.post("http://localhost:8080/ticket", {flight_number: data.id, passenger, seat, bag_weight: weight})
        console.log(result.status)
    }

    if (isLoading) return <div>Loading...</div>

    return <>
        <Flight {...data}/>
        <FlightStations id={id}/>
        <ChoosePassenger selected={passenger} setPassenger={setPassenger}/>
        <BusSeats flight_number={Number.parseInt(id)} seats_max={data.free_seat} setSeat={setSeat}/>
        <h2>Almost done...</h2>
        <div style={{background: "#fff", borderRadius: "15px", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.2rem"}}>
            <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem", alignItems: "center"}}>
                <label style={{width: "fit-content"}}>Bag weight:</label>
                <input value={weight} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setWeight(Number.parseInt(event.target.value))} type={"number"}/>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button onClick={bookSeat} disabled={!(seat > 0 && passenger > 0 && weight >= 0)} style={{ width: "320px",background: "#1d3a8a", borderRadius: "12px", paddingTop: "8px", paddingBottom: "8px", border: "none", color: "#fff", fontSize: "16px"}}>Book!</button>
            </div>
        </div>
    </>
}