import { Component, OnInit } from '@angular/core';
import { Contacts ,Contact ,ContactName ,ContactField } from "@ionic-native/contacts/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  myContacts : Contact[] = [] ;

  constructor(private contacts : Contacts ,private callNumber : CallNumber ){

  }

  loadContacts (){

  
    let options = {
      filter : '',
      multiple : true ,
      hasPhoneNumber : true
    };

    this.contacts.find(['*'] ,options).then(
      (contacts  : Contact[] ) => {
        this.myContacts = contacts;
      }
    );

  }

  call(contact : Contact){ 
     this.callNumber.callNumber(contact.phoneNumbers[0].value , true);
  }
  ngOnInit(){
       this.loadContacts();
  };


}
