import axios from "axios";
import {useState} from "react";
import st from "./CitySearch.module.css"

interface ICity {
    id: number,
    city: string
}

export interface ICitySearchProps {
    placeholder: string,
    setValue(value: number): void
}

export function CitySearch(props: ICitySearchProps) {
    const [value, setValue] = useState("")
    const [recommendation, setRecommendation] = useState<ICity[]>()
    const [selected, setSelected] = useState<number>(-1)

    const getRecommendation = async () => {
        const result = await axios.get<ICity[]>(`http://192.168.0.218:8080/api/flight/search?keyword=${value}`, {withCredentials: true})
        return result.data
    }

    const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        setSelected(-1)
        const result = await getRecommendation()
       setRecommendation(result)
    }

    const selectCity = (element: ICity) => {
        setValue(element.city)
        setSelected(element.id)
        props.setValue(element.id)
    }

    return (
        <div className={st.searchContainer}>
            <input placeholder={props.placeholder} className={st.input} value={value} onChange={onChange}/>
            {recommendation &&
                recommendation.map(element =>
                    <div onClick={() => selectCity(element)}
                         key={"reccomedation_"+element.id}
                         className={st.recommendation + (selected == element.id ? " " + st.selected : "")}
                    ><p>{element.city}</p></div>)
            }
        </div>
    );
}
