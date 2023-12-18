import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { ObservablesService } from '../observables.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = [];

  constructor(private observablesService:ObservablesService) {
  }

  ngOnInit() {
    this.observablesService.getCustomObservable().subscribe((result)=>{
      this.data.push(result);
      console.log(this.data);
    });
  }

}
