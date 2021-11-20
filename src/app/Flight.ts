import { Ticket } from "./Ticket";

export interface Flight{
    flId:number;
    srcTime:string;
    desTime:string;
    endDes:string;
    startDes:string;
    classPrice:{
        businessClassCost:number;
        economyClassCost:number;
    }
    flName:string;
    totalSeat:number;
    totalBookedSeat:number;
    totalAvailableSeat:number;
    airlineName:string;
    flDate:Date;
   
    ticket:Ticket[];    
}