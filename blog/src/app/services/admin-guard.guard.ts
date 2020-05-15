import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

   constructor(private authService: AuthService) {
}

canActivate() {
   if (this.authService.isLoggedIn()) {
   	return true;
   }
}
}

