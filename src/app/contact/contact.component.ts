import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  sendsData: string = '';
  recievedData: string[] = [];
  constructor(private accountsService: AccountsService) {
    console.log(this.sendsData);
  }

  ngOnInit() {
    this.accountsService.getData().subscribe((data) => {
      this.recievedData.push(data);
    });
  }

  sendData(event) {
    this.accountsService.sendData(event);
  }
}
