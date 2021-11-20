import { Ticket } from "./Ticket";

export interface WSeat{
    seatNo:number;
    seatStatus:string;
    ticketId:number;
    flightId:number;
}