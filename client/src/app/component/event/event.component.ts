import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Event } from '../../interface/event.model';
import urlImg from '../../config/configs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent implements OnInit {
  listEvents: Array<Event> = [];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(public eventService: EventService) {}

  apiUrlImg: string = urlImg;
  ngOnInit(): void {
    this.loadEvents();
  }

  private loadEvents(): void {
    this.eventService.getEvents().subscribe({
      next: (result: any) => {
        if (Array.isArray(result.data)) {
          console.log(result.data);
          this.listEvents = result.data;
        } else {
          console.error('Data received is not an array of Events', result);
        }
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
