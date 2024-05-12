import st from "./FlightDuration.module.css";

export const FlightDuration = (props: {dispatch: string, arrive: string, seat?: string}) => {
    const duration = new Date(props.arrive).getTime() - new Date(props.dispatch).getTime()

    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    return (
        <div className={st.container}>
            <div className={st.place}>
                {props.seat && <p className={st.seat}>{props.seat}</p>}
                <p className={st.duration}>{hours}hrs {minutes}min</p>
            </div>
        </div>
    );

}
