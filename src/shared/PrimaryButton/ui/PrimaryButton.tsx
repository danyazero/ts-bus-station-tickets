import st from "./PrimaryButton.module.css"

export interface ISubmitButton {
    title: string,
    disabled: boolean
}

export const PrimaryButton = (props: ISubmitButton) => {
    return (
        <button type="submit" disabled={props.disabled} className={st.primaryButton}
                onClick={() => window.navigator.vibrate(2)}>{props.title}</button>
    );
}