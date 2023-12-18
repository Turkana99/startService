import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  count = 0;
  constructor() {}

  getCustomObservableCreate(): Observable<number> {
    const newObservable = Observable.create((observer: Observer<number>) => {
      observer.next(1);

      const newInterval = setInterval(() => {
        const nextValue = Math.floor(Math.random() * 100) + 1;
        observer.next(nextValue);
        if (nextValue == 4) {
          observer.error('nextValue eqaul is 4!');
        }
        if (nextValue == 50) {
          observer.complete();
          clearInterval(newInterval);
        }
        console.log(observer);
      }, 1000);
    }).pipe(
      filter((data) => +data % 2 === 0),
      map((data) => +data * 2)
    );

    return newObservable;
  }
}
