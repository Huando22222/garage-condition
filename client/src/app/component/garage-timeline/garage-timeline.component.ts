import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-garage-timeline',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    CommonModule,
    MatProgressBarModule,
  ],
  templateUrl: './garage-timeline.component.html',
  styleUrl: './garage-timeline.component.scss',
})
export class GarageTimelineComponent {
  ngOnInit(): void {
    console.log(this.scheduleData);
  }
  scheduleData = {
    schedule: [
      {
        shift: 'Ca 1',
        time: '6:45 AM - 9:00 AM',
      },
      {
        shift: 'Ca 2',
        time: '9:20 AM - 11:35 AM',
      },
      {
        shift: 'Ca 3',
        time: '12:30 PM - 2:45 PM',
      },
      {
        shift: 'Ca 4',
        time: '3:05 PM - 5:20 PM',
      },
      {
        shift: 'Ca 5',
        time: '6:00 PM - 8:15 PM',
      },
    ],
  };
}
