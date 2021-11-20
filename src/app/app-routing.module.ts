import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditComponent } from './edit/edit.component';
import { ServicesComponent } from './services/services.component';
import { FlightdetailsComponent } from './flightdetails/flightdetails.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { AllflightdetailsComponent } from './allflightdetails/allflightdetails.component';
import { AdminComponent } from './admin/admin.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { AdminflightlistComponent } from './adminflightlist/adminflightlist.component';
import { AdminflightComponent } from './adminflight/adminflight.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'edit', component: EditComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'flightdetails',component: FlightdetailsComponent},
  {path: 'allflightdetails',component : AllflightdetailsComponent},
  { path: 'booking/:flightId/:economyClassCost/:businessClassCost',component: BookingComponent},
  { path: 'flightdetails/:startDes/:endDes', component: FlightdetailsComponent },
  { path: 'ticketDetails/:aadharId',component:TicketDetailsComponent},
  { path: 'adminflightlist',component: AdminflightlistComponent},
  { path: 'adminflight/:flId',component: AdminflightComponent},
  { path: 'profile',component: EditComponent},
  {path:'adminflight',component:AdminflightComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'payment/:aadharId',component: PaymentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
