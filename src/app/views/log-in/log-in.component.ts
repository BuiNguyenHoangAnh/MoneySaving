import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  isRegister = false;

  constructor() { }

  ngOnInit() {
    
  }

  openRegister() {
    this.isRegister = true;
  }
}
