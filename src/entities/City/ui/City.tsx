import st from "./City.module.css"

export interface ICityProps {
    cityName: string,
    count: number
}

export function City(props: ICityProps) {
    return (
        <div className={st.row}>
            <h3>{props.cityName}</h3>
            <p>{props.count}</p>
        </div>
    );
}