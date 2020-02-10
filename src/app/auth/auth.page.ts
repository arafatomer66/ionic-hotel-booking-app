import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false ;

  constructor(private auth: AuthService , private router : Router) { }

  ngOnInit() {
  }

  onLogin(){
    this.isLoading = true ;
    this.auth.login();
    setTimeout(()=>{
      
    this.isLoading = false ;
    this.router.navigateByUrl('/places/tabs/discover');
        
    } , 1500);
  }

}
