import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Flight } from './Flight';
import { Ticket } from './Ticket';
import { User } from './User';
import { WAdmin } from './WAdmin';
import { WSeat } from './WSeat';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private restUrl : string ='http://localhost:8080/AirlineReservationSystem1';
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  register(user: any): Observable<User> {
    console.log(user);
    return this.http.post<User>(
      this.restUrl + '/arscontrol/adduser',
      JSON.stringify(user),
      this.httpOptions
    ).pipe(retry(1),catchError(this.handleError));
  }

  getUserById(emailId:string) :Observable<HttpResponse<User>>{
    console.log(emailId);
    return this.http.get<User>(
      this.restUrl  + '/arscontrol/getuserbyid/' + emailId +'/',{ observe: 'response'}
      ).pipe(retry(1),catchError(this.handleError));
      
  }

  updateUser(user: any): Observable<any> {
    console.log('from service update() ' + user);
    return this.http.put<User>(
      this.restUrl + '/arscontrol/updateuser',
      JSON.stringify(user),
      this.httpOptions
    ).pipe(retry(1),catchError(this.handleError));
  }

  getUserByIdPass(emailId:string,password:string) :Observable<HttpResponse<User>>{
    console.log();
    
    return this.http.get<User>(
      this.restUrl  + '/arscontrol/login/' + emailId +'/' +password,{ observe: 'response'}
      ).pipe(retry(1),catchError(this.handleError));
      
    }

  // getAdminByIdPass(emailId:string,password:string) :Observable<any>{
  //   return this.http.get<any>(
  //     this.restUrl  + '/adminlogin/' + emailId +'/' +password
  //     ).pipe(retry(1),catchError(this.handleError));
  // }
  getAdminByIdPass(emailId:string,password:string) :Observable<HttpResponse<any>>{
    console.log(emailId,password);
    
    return this.http.get<any>(
      this.restUrl  + '/adminControl/login/' + emailId +'/' + password ,{ observe: 'response'}
      ).pipe(retry(1),catchError(this.handleError));
      
  }

  deleteUser(emailId: string) {
    return this.http.delete<User>(
      this.restUrl + '/arscontrol/deleteuser/' + emailId +'/',
      this.httpOptions
    ).pipe(retry(1),catchError(this.handleError));
  }


  getFlightById(flId:string) :Observable<HttpResponse<Flight>>{
    console.log(flId);
    return this.http.get<Flight>(
      this.restUrl  + '/getFlightByid/' + flId ,{ observe: 'response'}
      ).pipe(retry(1),catchError(this.handleError));
  }

  getFlightBySrcDes(src:string,des:string) :Observable<HttpResponse<Flight[]>>{
    console.log(src,des);
    return this.http.get<Flight[]>(
      this.restUrl  + '/flights/getBySrcAndDes/' + src +'/' + des ,{ observe: 'response'}
      ).pipe(retry(1),catchError(this.handleError));
  }
  getAllFlights() :Observable<HttpResponse<Flight[]>>{

    return this.http.get<Flight[]>(
      this.restUrl  + '/flights/allFlights',{ observe: 'response'}
      ).pipe(retry(1),catchError(this.handleError));
  }

  cancelTicket(aadharId:number,flId:number):Observable<any>{

    return this.http.delete<Ticket>(
      this.restUrl  + '/cancelTicket/'+aadharId+'/'+flId
    
      ).pipe(retry(1),catchError(this.handleError));
  }

  getTicketById(aadharId:number) :Observable<Ticket>{
    
    return this.http.get<Ticket>(
      this.restUrl  + '/getTicketByid/'+aadharId
      ).pipe(retry(1),catchError(this.handleError));
  } 

 bookATicket(ticket: any): Observable<Ticket> {
    console.log(ticket);
    return this.http.post<Ticket>(
      this.restUrl + '/addBooking',
      JSON.stringify(ticket),
      this.httpOptions
    ).pipe(retry(1),catchError(this.handleError));
  }
  getAllSeatStatus(flightId:number):Observable<HttpResponse<WSeat[]>>{
    return this.http.get<WSeat[]>(
      this.restUrl + '/allSeatStatus/'+flightId,{ observe: 'response'}
    ).pipe(retry(1),catchError(this.handleError));
  }
  addFlightByAdmin(flight:Flight) :Observable<Flight>{
    console.log(flight);
      return this.http.post<Flight>(
        this.restUrl  + '/adminControl/addFlightDetails',
        JSON.stringify(flight),
        this.httpOptions
        ).pipe(retry(1),catchError(this.handleError));
    }

    deleteFlightByAdmin(flId: number) {
      return this.http.delete<Flight>(
        this.restUrl + '/adminControl/deleteflight/' + flId ,
        this.httpOptions
      ).pipe(retry(1),catchError(this.handleError));
    }

  handleError(err:any){
    let errorMessage ='';
    if(err.error instanceof ErrorEvent){
      errorMessage=err.error.message;
    }
    else{
    errorMessage=`Error Code: ${err.status} \n Error Message: ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
