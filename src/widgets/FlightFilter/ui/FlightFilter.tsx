import st from "./FlightFilter.module.css"
import {GetDataHook} from "../../../features/requestHook";
import {SelectBox} from "../../../shared/SelectBox";
import {useState} from "react";
import axios from "axios";
import {IFlight} from "../../../entities/Flight/models/interfaces.ts";

export function FlightFilter(props: {setData(data: IFlight[]): void}) {

    const {data: stations, loading} = GetDataHook<{id: number, city: string}[]>('/flight/station', 2, 300, true)

    const [dispatchCity, setDispatchCity] = useState(0)
    const [arriveCity, setArriveCity] = useState(0)

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const result = await axios.get<IFlight[]>(`http://192.168.0.218:8080/api/flight/filter?dispatchCity=${dispatchCity}&arrivalCity=${arriveCity}`, {withCredentials: true})
        console.log(result.data)
        props.setData(result.data)
    }

    if (loading && !stations) return <></>


    return (
        <form onSubmit={onSubmit}>
            <SelectBox setValue={setDispatchCity} selectItems={stations.map(element => {
                return {id: element.id, value: element.city}
            })}/>
            <SelectBox setValue={setArriveCity} selectItems={stations.map(element => {
                return {id: element.id, value: element.city}
            })}/>
            <button type={"submit"}>Search</button>
        </form>
    );
}