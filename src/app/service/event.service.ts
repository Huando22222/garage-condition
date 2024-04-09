

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Event } from '../interface/event.model'; // Import model
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  constructor(private http: HttpClient) {}

  getEvents() {
    const dataUrl = `${Constants.URL}event`;
    return this.http.get<Array<Event>>(dataUrl);
  }
}
