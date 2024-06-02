import st from "./TextInput.module.css"

export interface ITextInput {
    value: string,
    placeholder: string,
    autocomplete: string,
    onChange(value: string): void
}

export const TextInput = (props: ITextInput) => {

    return (

            <input className={st.input} name={props.autocomplete} autoComplete={props.autocomplete} type={"text"}
                   value={props.value} placeholder={props.placeholder} onChange={(event) => {
                props.onChange(event.target.value)
            }}/>
    );
}
