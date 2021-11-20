import { Ticket } from "./Ticket";

export interface User
{
    emailId:string;
    password:string;
    gender:string;
    userName:{
    firstName:string,
    lastName:string};
    phone:{
    phone1:number,
    phone2:number};
    country:string;
    ticket:Ticket[];    

}