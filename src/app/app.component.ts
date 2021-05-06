import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _data:DataService,private _route:Router){}
  title = 'Mobius';
//   q!: string;
//   flag!:boolean;
//   total_user!:number;
//   usersdata!:any;
//   ongetdata(val:any){
//     console.log("compo")
//     console.log(val);
//     this._data.getdata(val).subscribe(res => {
//       this.usersdata=res.items;
//       this.total_user=res.total_count;
//       this.flag=true;
//       console.log(res)
//     },
//       error =>{
//         console.log("error")
//       });
//   }
//   userprofile(i:number){
    
//   this._data.userprofiledata(this.usersdata[i].login).subscribe(res => {
//     localStorage.setItem("userdata",JSON.stringify(res));
//    this._route.navigateByUrl('/user');
//     console.log(res)
//   },
//     error =>{
//       console.log("error")
//     });
// }
}
