import {IFlight} from "../../../entities/Flight/models/interfaces.ts";
import {Flight} from "../../../entities/Flight";
import {GetDataHook} from "../../../features/requestHook";
import {FlightFilter} from "../../../widgets/FlightFilter/ui/FlightFilter.tsx";
import {useEffect, useState} from "react";

export const Home = () => {
    // const {data: flights, isLoading}: {data: IFlight[], isLoading: boolean} = useSWR('http://192.168.0.218:8080/api/flight', fetcher)
    const [filteredData, setFilteredData] = useState<IFlight[]>([]);

    const {data, loading, error} = GetDataHook<IFlight[]>('/flight', 2, 300, true)

    useEffect(() => {
        setFilteredData(data)
    }, [data])

    return <>
        <FlightFilter setData={setFilteredData}/>
        {!loading && filteredData ? filteredData.map((element, index) => <Flight key={element.id + "_" + index} {...element} />) :
            <div>Loading...</div>}
    </>
}