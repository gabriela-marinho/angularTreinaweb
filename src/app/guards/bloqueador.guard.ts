import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  CanLoad, Route,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AppComponent} from "../app.component";


@Injectable({
  providedIn: 'root'
})
export class BloqueadorGuard implements CanActivate, CanDeactivate<AppComponent>, CanLoad {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log(route,state);
    return false;

  }
  canDeactivate(
    component: AppComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log(route,state);
    return true;
  }
  canLoad(
    route:Route
  ):boolean{
  return false;
  }
}
