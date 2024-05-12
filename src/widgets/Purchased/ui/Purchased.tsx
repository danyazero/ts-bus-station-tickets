import {GetDataHook} from "../../../features/requestHook";
import {City} from "../../../entities/City";
import {HorizontalBar} from "../../../entities/HorizontalBar/ui/HorizontalBar.tsx";

export interface IPurchases {
    title: string,
    count: number,
    sum: number
}

export function Purchased() {

    const {data, loading} = GetDataHook<IPurchases[]>("/dashboard/last", 2, 300, true)

    return (
        <div>
            {!loading && data ?
                <HorizontalBar name={["Purchased"]}
                               titles={data.map(element => element.title + ` (${element.count}pcs)`)}
                               values={[data.map(element => element.sum)]}/>
                : <div>Loading...</div>}
        </div>
    );
}