import st from "./InputContainer.module.css"

export interface IInputContainerProps {
    label: string,
    children: React.ReactNode,
}

export const InputContainer = (props: IInputContainerProps) => {
    return (
        <div className={st.container}>
            <label className={st.label}>{props.label}</label>
            {props.children}
        </div>
    );
}