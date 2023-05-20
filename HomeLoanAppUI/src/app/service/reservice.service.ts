import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReserviceService {

  constructor(private http:HttpClient) { }

  saveLoanApplication(data:any):Observable<any>{

    return this.http.post("http://localhost:8080//documents/adddocuments", data)


  }


}
