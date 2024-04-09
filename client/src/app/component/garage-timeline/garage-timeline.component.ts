import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';


@Component({
  selector: 'app-garage-timeline',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule, CommonModule],
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
        shift: 'Shift 1',
        time: '6:45 AM - 9:00 AM',
      },
      {
        shift: 'Shift 2',
        time: '9:20 AM - 11:35 AM',
      },
      {
        shift: 'Shift 3',
        time: '12:30 PM - 2:45 PM',
      },
      {
        shift: 'Shift 4',
        time: '3:05 PM - 5:20 PM',
      },
      {
        shift: 'Shift 5',
        time: '6:00 PM - 8:15 PM',
      },
    ],
  };
}
