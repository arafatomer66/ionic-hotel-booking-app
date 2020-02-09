import { PlacesService } from './../../places.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place ;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private navCtrl: NavController  , private route: ActivatedRoute , private placeService: PlacesService)  { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (paramMap) => {
         if ( !paramMap.has('placeId')) {
            this.navCtrl.navigateBack('/places/tabs/discover');
            return ;
         }

         this.place = this.placeService.getPlace(paramMap.get('placeId'));
      }
    );
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');

    this.navCtrl.navigateBack('/places/tabs/discover');
    //   this.navCtrl.pop();
    // this method is not effecient as if the page loaded theri is no page in stack
  }

}
