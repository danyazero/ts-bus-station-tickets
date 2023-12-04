import st from "./TicketDate.module.css";

export const TicketDate = (props: {date: string}) => {
    const date = new Date(props.date)
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const week_day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <div className={st.date}>
            <div className={st.time}>
                {date.getHours()}:{date.getMinutes().toString().padStart(2, '0')}
            </div>
            <p className={st.day}>{date.getDate().toString().padStart(2, '0')} {month[date.getMonth()]} ({week_day[date.getDay()]})</p>
        </div>
    );

}
