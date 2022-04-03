import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor(private http: HttpClient) { }
  getSideBarData() {
    return this.http.get<any>('assets/json/navigationData.json')
  }
}
