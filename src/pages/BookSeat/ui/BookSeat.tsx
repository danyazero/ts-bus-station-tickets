import BusSeats from "../../../widgets/BusSeats";
import ChoosePassenger from "../../../widgets/ChoosePassenger";
import React, {Dispatch, useState} from "react";
import {useParams} from "react-router-dom";
import {IFlight} from "../../../entities/Flight/models/interfaces.ts";
import {Flight} from "../../../entities/Flight";
import axios from "axios";
import FlightStations from "../../../widgets/FlightStations";
import {GetDataHook} from "../../../features/requestHook";

export const BookSeat = () => {
    const { id } = useParams();
    const [seat, setSeat] = useState<number>(0)
    const [passenger, setPassenger] = useState<number>(0)
    const [weight, setWeight] = useState<number>(0)
    const [dispatch, setDispatch] = useState<number>()
    const [arrive, setArrive] = useState<number>()
    // const {data, isLoading}: {data: IFlight, isLoading: boolean} = useSWR('http://192.168.0.218:8080/api/flight/' + id, fetcher)

    const {data, loading, error} = GetDataHook<IFlight>('/flight/' + id, 2, 300, true)

    async function bookSeat(){
        console.log({seat, passenger, weight})
        const result = await axios.post("http://192.168.0.218:8080/api/ticket",
            {flight_number: data.id, passenger, seat, bag_weight: weight, dispatch_city: dispatch, arrival_city: arrive},
            {withCredentials: true})
        console.log(result.status)
    }

    const setStations = (dispatch: number, arrive: number) => {
        setDispatch(dispatch)
        setArrive(arrive)
    }

    if (loading) return <div>Loading...</div>

    return <>
        <Flight {...data}/>
        {id && <FlightStations id={Number(id)} koef={data.pricePerKilometer} setStations={setStations}/>}
        <ChoosePassenger selected={passenger} setPassenger={setPassenger}/>
        <BusSeats flight_number={Number(id)} seats_max={data.freeSeat} setSeat={setSeat}/>
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