import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditComponent } from './edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { BookingComponent } from './booking/booking.component';

import { PaymentComponent } from './payment/payment.component';
import { AllflightdetailsComponent } from './allflightdetails/allflightdetails.component';
import { AdminComponent } from './admin/admin.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { AdminflightComponent } from './adminflight/adminflight.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    ContactusComponent,
    HomeComponent,
    AboutusComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    EditComponent,
    ProfileComponent,
    ServicesComponent,
    FlightdetailsComponent,
    BookingComponent,
    PaymentComponent,
    AllflightdetailsComponent,
    AdminComponent,
    TicketDetailsComponent,
    AdminflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule, NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
