import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainBoardService {

  viewMode:Subject<any> = new Subject<any>();
  constructor() { }


}
