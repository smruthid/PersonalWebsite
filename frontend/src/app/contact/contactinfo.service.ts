import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactinfoService {
 // url = "https://calm-crag-34365-bfa2266ba68d.herokuapp.com/api/contact"
  url = "localhost:3000"
  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post(this.url, data);
  }
}
