import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient){}
  
 
  getdata(stringValue: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('q', stringValue);

    
    return this.http.get('https://api.github.com/search/users', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params
    })
  }
  userprofiledata(user: string): Observable<any> {
    
    
    
    return this.http.get<any>(`${'https://api.github.com/users'}/${user}`);
   
  }

}
