export interface ITicket {
    id: number,
    flight_number: number,
    bus_class: string,
    seat: number,
    bag_weight: number,
    full_name: string,
    email: string,
    dispatch_city: string,
    arrival_city: string,
    dispatch_date: string,
    arrival_date: string
}