import st from "./DatePicker.module.css"

export interface ISelectBoxProps {
    setTime(value: string): void
}

export function DatePicker(props: ISelectBoxProps) {
    return (
        <input type={"datetime-local"} onChange={(event) => props.setTime(event.target.value)}/>
    );
}