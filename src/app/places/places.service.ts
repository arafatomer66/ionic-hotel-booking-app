import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      // tslint:disable-next-line: max-line-length
      'p1', 'Dhaka', 'A good place where to will feel everything', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dhaka_14th_March_%2832624769393%29.jpg/1200px-Dhaka_14th_March_%2832624769393%29.jpg', 299.99
    ),
    new Place(
      'p2', 'Khulna', 'A awsme place where to will feel everything', 'https://www.hotelroyalintl.com/assets/img/khulna/03.jpg', 270.99
    ),
    new Place(
      'p2', 'Chittagong', 'A awsme place where to will feel everything', 'https://www.hotelroyalintl.com/assets/img/khulna/03.jpg', 270.99
    ),
    new Place(
      'p2', 'Rajshahi', 'A awsme place where to will feel everything', 'https://www.hotelroyalintl.com/assets/img/khulna/03.jpg', 270.99
    ),


  ];

  get places() {
    return [...this._places];
  }

  constructor() { }


  getPlace(id: string){
     return {... this._places.find(
      (p) => p.id === id
    )};
  }
}
