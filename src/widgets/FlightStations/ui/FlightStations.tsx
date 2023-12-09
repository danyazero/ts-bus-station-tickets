import {IStation} from "../../../entities/Station/model.ts";
import useSWR from "swr";
import {fetcher} from "../../../api.ts";
import st from "./FlightStations.module.css"
import {Station} from "../../../entities/Station/ui/Station.tsx";
import {useEffect, useState} from "react";

export const FlightStations = (props: {id: number}) => {
    const {data, isLoading}: {data: IStation[], isLoading: boolean} = useSWR(`http://localhost:8080/flight/${props.id}/stations`, fetcher)
    const [stations, setStations] = useState<number[]>([])

    useEffect(() => {
        console.log(stations)
    }, [stations]);

    function setStation(station: number){
        if (stations.length > 0){
            const element = stations.pop()
            if (element > station) setStations([station, element])
            else setStations([element, station])
        } else setStations([station])
    }

    if (isLoading) return <div>Loading...</div>

    return <>
        <h2>Choose stations:</h2>
        <div className={st.flight_stations}>
            {data.sort((a, b) => new Date(a.arrival_date) - new Date(b.arrival_date)).map((element) => <Station key={"station_" + element.id} id={element.id} city={element.city} dispatch_date={element.dispatch_date} arrival_date={element.arrival_date} checked={stations.find(id => id == element.id) != undefined} setStation={setStation}/>)}
        </div>
    </>
}