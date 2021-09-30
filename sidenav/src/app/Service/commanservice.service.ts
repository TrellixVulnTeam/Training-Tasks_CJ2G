import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommanserviceService {
  constructor() {}
  sidnav: Subject<any> = new Subject();
}
