import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: number;
  data: number[] = [];
  constructor(
    private route: ActivatedRoute,
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });

    this.loggingService
      .getCustomObservableCreate()
      .subscribe((result) => this.data.push(result));
  }
}
