import {GetDataHook} from "../../../features/requestHook";
import {City} from "../../../entities/City";
import {HorizontalBar} from "../../../entities/HorizontalBar/ui/HorizontalBar.tsx";

export interface IPurchases {
    title: string,
    count: number
}

export function Purchased() {

    const {data, loading} = GetDataHook<IPurchases[]>("/dashboard/last", 2, 300, true)

    return (
        <div>
            {!loading && data ?
                <HorizontalBar name={"City"} titles={data.map(element => element.title)} values={data.map(element => element.count)}/>
                : <div>Loading...</div>}
        </div>
    );
}