import { Router } from '@angular/router';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];

  constructor(private placesServices: PlacesService , private router : Router) { }

  ngOnInit() {
    this.offers = this.placesServices.places;
  }

  onEdit(offerId, slidingItem :IonItemSliding){
       slidingItem.close();
       this.router.navigate(['/' ,'places' , 'tabs' , 'offers' , 'edit' , offerId]);
  }

}
