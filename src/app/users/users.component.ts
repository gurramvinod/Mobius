import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private _data:DataService,private _route:Router){}

  ngOnInit(): void {
  }
  q!: string;
  flag!:boolean;
  total_user!:number;
  usersdata!:any;
  resultArray:Array<any>=[]
  temp:Array<any>=[];
  
  ongetdata(val:any){
    console.log("compo")
    
    this._data.getdata(val).subscribe(res => {
      this.flag=false;
      this.usersdata=res.items;
      localStorage.setItem("users",JSON.stringify(res.items));
      this.users=JSON.parse(localStorage.getItem("user")!);
      this.total_user=res.items.length;
      this.flag=true;
      this.userprofiles();
      
    },
      error =>{
        console.log("error")
      });
     
  }
  
  
  
  //search user data
  userprofile(i:number){
    
  this._data.userprofiledata(this.usersdata[i].login).subscribe(res => {
    localStorage.setItem("userdata",JSON.stringify(res));
   this._route.navigateByUrl('/user');
    console.log(res)
  },
    error =>{
      console.log("error")
    });
}
  
  //getting first 10 users data
userprofiles(){
    for (let i = 0; i < 10; i++) {
  this._data.userprofiledata(this.usersdata[i].login).subscribe(res => {
  // console.log(res)
  this.temp[i]=res;
  this.resultArray.push([this.temp[i].login,this.temp[i].followers]);
  
  },
    error =>{
      console.log("error")
    });
}

}


//google chart
title = 'Followers';

type:any = 'BarChart';

agExpColumns:any = ['Browser', 'Percentage'];
options = {    
};
width = 550;
height = 400;
}
