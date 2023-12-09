import {useEffect} from "react";
import {IPassenger} from "../models.ts";
import {Passenger} from "../../../entities/Passenger";
import st from "./ChoosePassenger.module.css"
import useSWR from "swr";
import {fetcher} from "../../../api.ts";

export const ChoosePassenger = (props: {selected: number, setPassenger(document_number: number): void}) => {
    const { data: passengers, isLoading }:{data: IPassenger[], isLoading: boolean} = useSWR('http://localhost:8080/passenger', fetcher)
    useEffect(() => {
        if (!isLoading) props.setPassenger(passengers[0].document_number)
    }, [passengers]);

    return <>
        <div className={st.added_passengers}>
            <h2>Choose Passenger:</h2>
            {isLoading ? <div>Loading...</div> : passengers.map((element, index) =>
                <Passenger key={element.full_name + "_" + index} full_name={element.full_name}
                           document_number={element.document_number} email={element.email}
                           number={element.number} checked={element.document_number == props.selected}
                           setPassenger={props.setPassenger}/>)}
        </div>
    </>
}