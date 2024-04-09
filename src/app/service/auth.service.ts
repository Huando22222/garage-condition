import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NearGarage } from '../interface/near-garage.model'; // Import model
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class NearGaragesService {

  constructor(private http: HttpClient) {}

  getNearGarages() {
    const dataUrl = `${Constants.URL}`;
    return this.http.get<Array<NearGarage>>(dataUrl);
  }
}
