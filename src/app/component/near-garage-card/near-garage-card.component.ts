import { AfterViewInit, Component, inject, Input, input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NearGaragesService } from '../../service/near-garage.service';
import { NearGarage } from '../../interface/near-garage.model';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-near-garage-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule,MatProgressBarModule],
  templateUrl: './near-garage-card.component.html',
  styleUrl: './near-garage-card.component.scss',
})
export class NearGarageCardComponent {

  @Input() nearGarage: NearGarage | null = null;
  
  constructor() { 
  };
  calculatePercentage(): number {
    if (!this.nearGarage) return 0;
    const numerator = this.nearGarage.number; // Giả sử nearGarage?.number là 264/1000
    const denominator = 1000;
    return (numerator / denominator) * 100;
  }
  goToLocationMap() {
    window.location.href = this.nearGarage ? this.nearGarage?.directions_link : "" ;
  }
  truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.substr(0, maxLength) + '...' : text;
  }
  
  goToMarkLocation() {
    const iframeElement = document.getElementById('mapIframe') as HTMLIFrameElement;
    iframeElement.src = this.nearGarage ? this.nearGarage?.google_maps_link : "" ;
  }
  
}
