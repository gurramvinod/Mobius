import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
userdetails:any;
  constructor() { }

  ngOnInit(): void {
    this.userdetails=JSON.parse(localStorage.getItem("userdata")!);
  }

 

}
