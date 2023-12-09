import st from "./Checkbox.module.css";

export const Checkbox = (props: {checked: boolean, setChecked(): void}) => {
    return <>
        <div onClick={() => props.setChecked()} className={st.checkbox}>
            <div style={{background: props.checked ? "#1d3a8a" : "#9ca3af"}} className={st.check}></div>
        </div>
    </>
}