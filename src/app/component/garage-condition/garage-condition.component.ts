import { Component, inject } from '@angular/core';
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
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
    AsyncPipe,
  ],
  templateUrl: './garage-condition.component.html',
  styleUrl: './garage-condition.component.scss',
})
export class GarageConditionComponent {
  private store = inject(Store);

  ticket$: Observable<number>;
  ticketValue: number = 0;

  constructor() {
    this.ticket$ = this.store.select('ticket');
  }

  value = 0;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'buffer';
  bufferValue = 100;
  ngOnInit(): void {
    this.ticket$.subscribe((ticket) => {
      // Tính phần trăm
      this.value = (ticket / 2000) * 100;
      this.bufferValue = this.value +10
      if (this.value < 50) {
        this.color = 'primary';
      } else if (this.value >= 50 && this.value <= 70) {
        this.color = 'accent';
      } else {
        this.color = 'warn';
      }
    });
  }
}
