export interface ITicket {
    id: number,
    flightNumber: number,
    busClass: string,
    seat: number,
    bagWeight: number,
    fullName: string,
    email: string,
    dispatchCity: string,
    arrivalCity: string,
    dispatchDate: string,
    arrivalDate: string,
    calculatedPrice: number
}

//{
//         "fullName": "Mozzhukhin Daniil Andrievich",
//         "dispatchCity": "Миколаїв",
//         "passengerDocument": 549350,
//         "flightNumber": 1,
//         "dispatchDate": "2023-11-28T10:00:00.000+00:00",
//         "arrivalCity": "Кривий Ріг",
//         "busClass": "STANDART",
//         "seat": 4,
//         "bagWeight": 10,
//         "arrivalDate": "2023-11-29T04:45:00.000+00:00",
//         "email": "formulamgo2@gmail.com"
//     }