import {useEffect} from "react";
import {IPassenger} from "../models.ts";
import {Passenger} from "../../../entities/Passenger";
import st from "./ChoosePassenger.module.css"
import useSWR from "swr";
import {fetcher} from "../../../api.ts";
import {GetDataHook} from "../../../features/requestHook";
import {IFlight} from "../../../entities/Flight/models/interfaces.ts";

export const ChoosePassenger = (props: {selected: number, setPassenger(document_number: number): void}) => {
    // const { data: passengers, isLoading }:{data: IPassenger[], isLoading: boolean} = useSWR('http://192.168.0.218:8080/api/passenger', fetcher)
    const {data, loading, error} = GetDataHook<IPassenger[]>('/passenger', 2, 300, true)
    useEffect(() => {
        if (!loading) props.setPassenger(data[0].documentNumber)
    }, [data]);

    return <>
        <div className={st.added_passengers}>
            <h2>Choose Passenger:</h2>
            {loading ? <div>Loading...</div> : data.map((element, index) =>
                <Passenger key={element.fullName + "_" + index} fullName={element.fullName}
                           documentNumber={element.documentNumber} email={element.email}
                           phone={element.phone} checked={element.documentNumber == props.selected}
                           setPassenger={props.setPassenger}/>)}
        </div>
    </>
}