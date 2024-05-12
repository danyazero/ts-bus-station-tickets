import {ISeat} from "./interfaces.ts";

export function getPassengerFullName(seat: number, seats: ISeat[]){
    const find_seat = seats.find(el => el.seat == seat)
    if (find_seat) return find_seat.fullName
    return "--"
}