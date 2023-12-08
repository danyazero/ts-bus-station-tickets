export const Seat = (props: {seat: number, full_name: string, engaged: boolean, setSeat(seat:number): void}) => {
    console.log(props.seat + " " + props.engaged)
    return <div onClick={() => props.setSeat(props.seat)} style={{background: props.engaged ? "#1d3a8a" : "#9ca3af", color: props.engaged ? "#fff" : "#000", width: "2rem", height: "2rem", borderRadius: "8px", display: "flex", alignItems: "center",  justifyContent: "center"}}>
        <p title={props.full_name}>{props.seat}</p>
    </div>
}