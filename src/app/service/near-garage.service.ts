



import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { NearGarage } from '../interface/near-garage.model'; // Import model

@Injectable({
  providedIn: 'root',
})
export class NearGaragesService {
  private apiUrl = 'https://garage-condition-be.onrender.com/';

  constructor(private http: HttpClient) {}

  getNearGarages() {
    const dataUrl = `${this.apiUrl}`;
    return this.http.get<Array<NearGarage>>(dataUrl);
  }
}
