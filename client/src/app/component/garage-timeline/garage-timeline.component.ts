import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
@Component({
  selector: 'app-garage-timeline',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule],
  templateUrl: './garage-timeline.component.html',
  styleUrl: './garage-timeline.component.scss',
})
export class GarageTimelineComponent {}
