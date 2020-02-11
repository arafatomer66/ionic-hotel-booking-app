import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false ;

  constructor(private auth: AuthService , private router : Router ,private loadingController : LoadingController) { }

  ngOnInit() {
  }

  onLogin(){
    this.isLoading = true ;
    this.auth.login();

    this.loadingController.create({
      keyboardClose :true ,
      message : "Logging in ...."

    }).then(
      (loadingEl)=>{
        loadingEl.present();
        setTimeout(()=>{
      
          this.isLoading = false ;
          loadingEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
              
          } , 1500);
         
      }
    );
    
  }

}
