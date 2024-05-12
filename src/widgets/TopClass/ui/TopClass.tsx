import {GetDataHook} from "../../../features/requestHook";
import {City} from "../../../entities/City";
import {Chart as ChartJS, BarElement, Tooltip, CategoryScale, Legend, LinearScale, Title} from "chart.js";
import {Bar} from "react-chartjs-2";
import {HorizontalBar} from "../../../entities/HorizontalBar/ui/HorizontalBar.tsx";

export interface ICity {
    className: string,
    count: number
}

export function TopClass() {

    const {data, loading} = GetDataHook<ICity[]>("/dashboard/class", 2, 300, true)


    return (
        <div>
            {!loading && data && data.length > 0 ?
                <HorizontalBar name={["Class"]} titles={data.map(element => element.className)} values={[data.map(element => element.count)]}/>
                : <div>Loading...</div>}
        </div>
    );
}