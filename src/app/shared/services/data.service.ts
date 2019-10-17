import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  isLoggedIn:BehaviorSubject<any> = new BehaviorSubject(true);
}
