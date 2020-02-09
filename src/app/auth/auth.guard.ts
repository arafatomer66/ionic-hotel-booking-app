import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor( private authService : AuthService , private router : Router){

  }
  
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.authService.userIsAuthenticated){
      this.router.navigateByUrl('/auth');
    }
    return this.authService.userIsAuthenticated ;
  }
}
