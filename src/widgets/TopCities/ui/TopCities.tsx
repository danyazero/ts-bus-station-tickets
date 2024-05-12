import {GetDataHook} from "../../../features/requestHook";
import {City} from "../../../entities/City";
import {HorizontalBar} from "../../../entities/HorizontalBar/ui/HorizontalBar.tsx";

export interface ICity {
    cityName: string,
    count: number
}

export function TopCities() {

    const {data, loading} = GetDataHook<ICity[]>("/dashboard/city", 2, 300, true)

    return (
        <div>
            {!loading && data ?
                <HorizontalBar name={"City"} titles={data.map(element => element.cityName)} values={data.map(element => element.count)}/>
                : <div>Loading...</div>}
        </div>
    );
}