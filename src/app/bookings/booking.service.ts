import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    private _booking: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            userId: 'abc',
            placeTitle: 'Dhaka to Cox',
            guestNumber: 2,
        }
    ];

    constructor() { }


    get bookings() {
        return [...this._booking];
    }

}
