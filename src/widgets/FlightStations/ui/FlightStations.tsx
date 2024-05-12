import {IStation} from "../../../entities/Station/model.ts";
import st from "./FlightStations.module.css"
import {Station} from "../../../entities/Station/ui/Station.tsx";
import {useEffect, useState} from "react";
import {GetDataHook} from "../../../features/requestHook";

export const FlightStations = (props: {
    id: number,
    setStations(dispatch: number, arrive: number): void,
    koef: number
}) => {
    // const {data, isLoading}: {data: IStation[], isLoading: boolean} = useSWR(`http://192.168.0.218:8080/api/flight/${props.id}/stations`, fetcher)
    const {data, loading, error} = GetDataHook<IStation[]>(`/flight/${props.id}/stations`, 2, 300, true)
    const [stations, setStations] = useState<number[]>([])
    const [calculatedPrice, setCalculatedPrice] = useState(0)

    useEffect(() => {
        props.setStations(stations[0], stations[1])
        console.log(stations)
    }, [stations]);

    function setStation(station: number) {
        if (stations.length > 0) {
            const element = stations.pop()
            if (element && element > station) setStations([station, element])
            else if (element) setStations([element, station])
        } else setStations([station])
    }

    useEffect(() => {
        if (stations && stations.length > 1) {
            const filtered = data.filter(element => stations.includes(element.id))
            console.log(filtered)
            const mapped = filtered.map(element => element.distance)
            console.log(mapped)
            const reduced = mapped.reduce((result: number, element) => {
                if (result == 0) return result + element
                return result - element
            })
            console.log(reduced)
            console.log(props.koef)

            setCalculatedPrice(Math.abs(reduced) * props.koef)
        }
    }, [stations])

    if (loading) return <div>Loading...</div>

    return <>
        <h2>Choose stations:</h2>
        <div className={st.flight_stations}>
            {data.sort((a, b) => new Date(a.arrivalDate).getDate() - new Date(b.arrivalDate).getDate()).map((element) =>
                <Station key={"station_" + element.id} id={element.id} city={element.city}
                         dispatchDate={element.dispatchDate} arrivalDate={element.arrivalDate}
                         checked={stations.find(id => id == element.id) != undefined} setStation={setStation}/>)}
            <p>Calculated price: {calculatedPrice}</p>
        </div>

    </>
}