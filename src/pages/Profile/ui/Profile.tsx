import {ITicket} from "../../../entities/Ticket/models/interfaces.ts";
import {Ticket} from "../../../entities/Ticket";
import {GetDataHook} from "../../../features/requestHook";

export const Profile = () => {
    // const [tickets, setTickets] = useState<ITicket[]>([])

    // useEffect(() => {
    //     axios.get('http://192.168.0.218:8080/api/ticket', {withCredentials: true}).then((response: {data: ITicket[]}) => setTickets(response.data)).catch(error => console.log(error.response.status))
    // }, [])

    const {data, loading, error} = GetDataHook<ITicket[]>('/ticket', 2, 300, true)
    console.log(data)
    return (
        <>
            {!loading && data ?  data.map((element, index) => <Ticket key={element.id + "_" + index} {...element}/>) : <div>Loading...</div>}
        </>
    );
}
