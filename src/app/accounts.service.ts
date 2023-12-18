import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor() {}
  private dataSubject = new Subject<any>();
  // private dataSubject = new BehaviorSubject<any>("test");

  sendData(data: any): void {
    this.dataSubject.next(data);
  }

  getData(): Observable<any> {
    return this.dataSubject;
  }
}
