

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Event } from '../interface/event.model'; // Import model

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'https://garage-condition-be.onrender.com/event';

  constructor(private http: HttpClient) {}

  getEvents() {
    const dataUrl = `${this.apiUrl}`;
    return this.http.get<Array<Event>>(dataUrl);
  }
}
