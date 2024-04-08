import { AfterViewInit, Component, inject, Input, input, OnInit } from '@angular/core';
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
  
  constructor() { 
  };

  goToLocationMap() {
    window.location.href =
      'https://www.google.com/maps/place/B%C3%A3i+Gi%E1%BB%AF+Xe+V%C3%A2n+%C4%90%C3%A0o/@10.801965,106.7137339,20.04z/data=!4m6!3m5!1s0x317528a4fd24ffff:0x8b023eeb84718489!8m2!3d10.8021414!4d106.7139389!16s%2Fg%2F11pkb7xhl4?hl=vi-VN&entry=ttu';
  }
  goToMarkLocation() {
    const locationUrl =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.509044467175!2d106.7122014!3d10.8017211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a4fd24ffff%3A0x8b023eeb84718489!2zQsO6aSBHacOqIFhlIFbDom4gxJDhu6lj!5e0!3m2!1sen!2suk!4v1646811013683!5m2!1sen!2suk';

    const iframeElement = document.getElementById(
      'mapIframe'
    ) as HTMLIFrameElement;
    iframeElement.src = locationUrl;
  }
}
