  import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
  import {MatButtonModule} from '@angular/material/button';
  import {MatCardModule} from '@angular/material/card';
  import { NearGaragesService } from '../../service/near-garage.service';
  import { NearGarage } from '../../interface/near-garage.model';
  import { NearGarageCardComponent } from '../near-garage-card/near-garage-card.component';
  import { CommonModule } from '@angular/common';
  import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
  @Component({
    
    selector: 'app-near-garage',
    standalone: true,
    imports: [
      MatButtonModule,
      MatCardModule,
      NearGarageCardComponent,
      CommonModule,
      MatSelectModule,
      MatFormFieldModule
    ],
    templateUrl: './near-garage.component.html',
    styleUrl: './near-garage.component.scss',
  })
  export class NearGarageComponent implements OnInit {
    nearGarages: Array<NearGarage> = [];
    sortBy: string = 'none';
    constructor(private nearGaragesService: NearGaragesService) {
    }

    ngOnInit() {
      this.goToLocationOnMap();
      this.loadNearGarages();
    
    }


    private loadNearGarages(): void {
      this.nearGaragesService.getNearGarages().subscribe({
        next: (result: any) => {
          if (Array.isArray(result.data)) {
            this.nearGarages = result.data.sort((a: NearGarage, b: NearGarage) => a.number - b.number);
            // Sắp xếp mảng theo trường number giảm dần
          } else {
            console.error('Data received is not an array:', result);
          }
        },
        error(err) {
          console.log(err);
        },
      });
    }
    sortByNumber(ascending: boolean): void {
      if (ascending) {
        this.nearGarages.sort((a, b) => a.number - b.number);
      } else {
        this.nearGarages.sort((a, b) => b.number - a.number);
      }
    }
    sortGarages(): void {
      if (this.sortBy === 'ascending') {
        this.nearGarages.sort((a, b) => a.number - b.number);
      } else if (this.sortBy === 'descending') {
        this.nearGarages.sort((a, b) => b.number - a.number);
      }
    }
    goToLocationOnMap() {
      const hutechLocationUrl =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.509044467175!2d106.7142494!3d10.8015646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a459cb43ab%3A0x6c3d29d370b52a7e!2sHUTECH%20University%20%E2%80%93%20Sai%20Gon%20Campus!5e0!3m2!1sen!2suk!4v1646811013683!5m2!1sen!2suk';

      const iframeElement = document.getElementById(
        'mapIframe'
      ) as HTMLIFrameElement;
      iframeElement.src = hutechLocationUrl;3
    }
  }
