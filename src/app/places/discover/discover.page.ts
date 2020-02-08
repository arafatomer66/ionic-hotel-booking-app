import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces : Place[];

  constructor(private placeService : PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places ;
  }

}
