export interface IFlight {
    id: number,
    flight_number: number,
    bus_class: string,
    bag_weight: number,
    bag_height: number,
    bag_width: number,
    bag_depth: number,
    purchased: number,
    free_seat: number,
    dispatch_city: string,
    arrival_city: string,
    dispatch_date: string,
    arrival_date: string
}