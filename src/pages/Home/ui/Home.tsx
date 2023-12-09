import {IFlight} from "../../../entities/Flight/models/interfaces.ts";
import {Flight} from "../../../entities/Flight";
import useSWR from "swr";
import {fetcher} from "../../../api.ts";

export const Home = () => {
    const {data: flights, isLoading}: {data: IFlight[], isLoading: boolean} = useSWR('http://localhost:8080/flight', fetcher)
    return <>
        {isLoading ? <div>Loading...</div> : flights.map((element, index) => <Flight key={element.id + "_" + index} {...element} />)}
    </>
}