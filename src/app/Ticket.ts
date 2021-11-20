import { Flight } from "./Flight";
import { User } from "./User";

export interface Ticket{
    aadharId:number
    ticketPrice:number;
    name:{
        firstName:string,
        lastName:string};
        bookingDate:Date;
    seatNo:number;
    address:string;
    passportNo:string;
    flight:Flight;
    user:User;  
}