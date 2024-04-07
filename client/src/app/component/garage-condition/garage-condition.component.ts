import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {
  ProgressBarMode,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

import { GarageTimelineComponent } from '../garage-timeline/garage-timeline.component';
@Component({
  selector: 'app-garage-condition',
  standalone: true,
  imports: [
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatSliderModule,
    MatProgressBarModule,
    GarageTimelineComponent,
  ],
  templateUrl: './garage-condition.component.html',
  styleUrl: './garage-condition.component.scss',
})
export class GarageConditionComponent {
  color: ThemePalette = 'accent';
  mode: ProgressBarMode = 'buffer';
  value = 50;
  bufferValue = 75;
}
