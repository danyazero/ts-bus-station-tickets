import st from "./FlightFilter.module.css"
import {GetDataHook} from "../../../features/requestHook";
import {SelectBox} from "../../../shared/SelectBox";
import {useState} from "react";
import axios from "axios";
import {IFlight} from "../../../entities/Flight/models/interfaces.ts";
import {CitySearch} from "../../../features/CitySearch/ui/CitySearch.tsx";

export function FlightFilter(props: {setData(data: IFlight[]): void}) {

    const {data: stations, loading} = GetDataHook<{id: number, city: string}[]>('/flight/station', 2, 300, true)

    const [dispatchCity, setDispatchCity] = useState(0)
    const [arriveCity, setArriveCity] = useState(0)

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (dispatchCity == 0 || arriveCity == 0) return
        const result = await axios.get<IFlight[]>(`http://192.168.0.218:8080/api/flight/filter?dispatchCity=${dispatchCity}&arrivalCity=${arriveCity}`, {withCredentials: true})
        console.log(result.data)
        props.setData(result.data)
    }

    if (loading && !stations) return <></>


    return (
        <form className={st.form} onSubmit={onSubmit}>
            <CitySearch placeholder={"Dispatch city"} setValue={setDispatchCity}/>
            <CitySearch placeholder={"Arrive city"} setValue={setArriveCity}/>
            <button disabled={dispatchCity == 0 && arriveCity == 0} className={st.searchButton} type={"submit"}>Search</button>
        </form>
    );
}