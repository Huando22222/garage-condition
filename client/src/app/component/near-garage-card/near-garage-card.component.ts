import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import Router từ @angular/router
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NearGaragesService } from '../../service/near-garage.service';
import { NearGarage } from '../../interface/near-garage.model';

@Component({
  selector: 'app-near-garage-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './near-garage-card.component.html',
  styleUrl: './near-garage-card.component.scss',
})
export class NearGarageCardComponent {

  @Input() nearGarage: NearGarage | null = null;

  constructor(private router: Router) { // Sửa đổi constructor để inject Router
  };

  goToLocationMap() {
    window.location.href = this.nearGarage ? this.nearGarage.directions_link : "";
  }
  
  goToMarkLocation() {
    const iframeElement = document.getElementById('mapIframe') as HTMLIFrameElement;
    iframeElement.src = this.nearGarage ? this.nearGarage.google_maps_link : "";
  }
  goToEvenPage() {
    this.router.navigateByUrl('/even'); 
  }
}
