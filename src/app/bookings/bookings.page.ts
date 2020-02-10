import { IonItemSliding } from '@ionic/angular';
import { BookingService } from './booking.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBooking : Booking[];

  constructor( private bookingsService : BookingService
     ) { }

  ngOnInit() {
    this,this.loadedBooking = this.bookingsService.bookings ;
  }

  onCencelBooking (offerId : string , slidingEl : IonItemSliding){
    slidingEl.close();
    
  }

}
