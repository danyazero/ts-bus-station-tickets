import st from "./SelectBox.module.css"

export interface ISelectBoxProps {
    selectItems: {id: number, value: string}[],
    setValue(value: number): void
}

export function SelectBox(props: ISelectBoxProps) {
    return (
        <select className={st.selectBox} onChange={(event) => props.setValue(Number.parseInt(event.target.value))}>
            {props.selectItems.map((element, index) => <option key={"select_option_"+index} value={element.id}>{element.value}</option>)}
        </select>
    );
}