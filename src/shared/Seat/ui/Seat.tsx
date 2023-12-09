export const Seat = (props: {seat: number, full_name: string, engaged: boolean, setSeat(seat:number): void, choosed: boolean}) => {
    return <button title={props.full_name} disabled={props.engaged} onClick={() => props.setSeat(props.seat)} style={{background: props.engaged ? "#1d3a8a" : props.choosed ? "#df6c14" : "#9ca3af",
        color: props.engaged ? "#fff" : props.choosed ? "#fff" : "#000", width: "2rem", height: "2rem",
        borderRadius: "8px", cursor: "pointer", border: "none", display: "flex", alignItems: "center",  justifyContent: "center"}}>
        <p>{props.seat}</p>
    </button>
}