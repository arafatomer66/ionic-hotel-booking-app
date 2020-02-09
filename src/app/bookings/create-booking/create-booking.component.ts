import { Place } from './../../places/place.model';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace : Place ;


  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}

  onCencel(){
     this.modalCtrl.dismiss(null , 'cancel');
  }


  onBookPlace(){
     this.modalCtrl.dismiss({message : "Your place is booked!"} , 'confirm');
      
  }

}
