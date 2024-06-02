import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import {Bar} from "react-chartjs-2";

interface IHorizontalBar {
    name: string[],
    titles: string[],
    values: number[][]
}

export function HorizontalBar(props: IHorizontalBar) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Tooltip,
        Title,
        Legend
    );
    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'none' as const,
            },
            title: {
                display: false,
            },
        },
    };

    function getDatasetArray() {
        let array = []
        if (props.name.length == props.values.length) {
            for (let i = 0; i < props.values.length; i++) {
                let obj = {
                        label: props.name[i],
                        data: props.values[i],
                        borderColor: 'rgb(30, 58, 138)',
                        backgroundColor: 'rgba(30, 58, 138, 0.5)',
                    }
                array.push(obj)
            }
        }
        console.log(array)
        return array
    }

    return (
        <div>
            {props.values && props.values.length > 0 ? <Bar data={{
                    labels: props.titles,
                    datasets: getDatasetArray()
                }} options={options}/>
                : <div>Loading...</div>}
        </div>
    );
}