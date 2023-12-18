import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservablesService {
  count = 0;
  constructor() {}

  getCustomObservable(): Observable<number> {
    const customObservable = new Observable((observer: Observer<number>) => {
      const customInterval = setInterval(() => {
        observer.next(this.count);
        this.count++;
        if (this.count === 3) {
          observer.complete();
          clearInterval(customInterval);
        }
      }, 1000);
      console.log(this.count);

   
    });
    return customObservable;
  }
}
