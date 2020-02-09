import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place: Place ;

  constructor( private placeService: PlacesService , private route: ActivatedRoute , private navCtrl: NavController ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (paramMap) => {
         if (!paramMap.has('placeId')) {
            this.navCtrl.navigateBack('/places/tabs/offers');
            return ;
         }

         this.place = this.placeService.getPlace(paramMap.get('placeId'));
      }
    ); 
  }


}
