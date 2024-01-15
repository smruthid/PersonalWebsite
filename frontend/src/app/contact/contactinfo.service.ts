import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactinfoService {
  url = "http://localhost:3000/contactinfo"

  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post(this.url, data);
  }
}
