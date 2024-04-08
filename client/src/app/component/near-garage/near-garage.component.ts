  import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
  import {MatButtonModule} from '@angular/material/button';
  import {MatCardModule} from '@angular/material/card';
  import { NearGaragesService } from '../../service/near-garage.service';
  import { NearGarage } from '../../interface/near-garage.model';
  import { NearGarageCardComponent } from '../near-garage-card/near-garage-card.component';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-near-garage',
    standalone: true,
    imports: [
      MatButtonModule,
      MatCardModule,
      NearGarageCardComponent,
      CommonModule,
    ],
    templateUrl: './near-garage.component.html',
    styleUrl: './near-garage.component.scss',
  })
  export class NearGarageComponent implements OnInit {
    // nearGarages: NearGarage[] = [];
    nearGarages: Array<NearGarage> = [];
    ontrue: boolean = true;
    // nearGaragesService: NearGaragesService = inject(NearGaragesService);
    // haha: NearGarage = {
    //   _id: '66128757ba346422860ee80d',
    //   name: 'Bãi Giữ Xe Vân Đào',
    //   address: '3 Đ. Điện Biên Phủ, Phường 25, Bình Thạnh',
    //   description:
    //     'Bãi giữ xe Vân Đào là một không gian rộng rãi, an toàn và có bảo vệ chuyên nghiệp, đảm bảo an ninh và an toàn cho xe của khách hàng.',
    //   google_maps_link:
    //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.509044467175!2d106.7122014!3d10.8017211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a4fd24ffff%3A0x8b023eeb84718489!2zQsO6aSBHacOqIFhlIFbDom4gxJDhu6lj!5e0!3m2!1sen!2suk!4v1646811013683!5m2!1sen!2suk',
    //   directions_link:
    //     'https://www.google.com/maps/place/B%C3%A3i+Gi%E1%BB%AF+Xe+V%C3%A2n+%C4%90%C3%A0o/@10.801965,106.7137339,20.04z/data=!4m6!3m5!1s0x317528a4fd24ffff:0x8b023eeb84718489!8m2!3d10.8021414!4d106.7139389!16s%2Fg%2F11pkb7xhl4?hl=vi-VN&entry=ttu',
    //   imageUrl: 'https://static.tuoitre.vn/tto/i/s626/2015/02/16/2A3AH1Q4.jpg',
    // };
    constructor(private nearGaragesService: NearGaragesService) {
      // this.nearGaragesService
      //   .getNearGarages()
      //   .then((nearGarages: NearGarage[]) => {
      //     this.nearGarages = nearGarages;
      //     console.log(nearGarages);
      //   });
    }

    ngOnInit() {
      // this.goToLocationOnMap();
      this.loadNearGarages();
    }

    private loadNearGarages(): void {
      console.log('go into fletch');
      this.nearGaragesService.getNearGarages().subscribe(
        // data=> this.nearGarages = data,
        {
          next: (result: any) => {
            // console.log("result 121212");
            // this.nearGarages = result;
            // console.log(result);
            if (Array.isArray(result.data)) {
              this.nearGarages = result.data;
            } else {
              console.error('Data received is not an array:', result);
            }
          },
          error(err) {
            console.log(err);
          },
        }
      );
    }

    // private loadNearGarages(): void {
    //   this.nearGaragesService.getNearGarages()
    // .then((nearGarages: NearGarage[]) => {
    //   this.nearGarages = nearGarages;
    //   console.log(nearGarages);
    // });
    // }


    // goToLocationOnMap() {
    //   const hutechLocationUrl =
    //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.509044467175!2d106.7142494!3d10.8015646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a459cb43ab%3A0x6c3d29d370b52a7e!2sHUTECH%20University%20%E2%80%93%20Sai%20Gon%20Campus!5e0!3m2!1sen!2suk!4v1646811013683!5m2!1sen!2suk';

    //   const iframeElement = document.getElementById(
    //     'mapIframe'
    //   ) as HTMLIFrameElement;
    //   iframeElement.src = hutechLocationUrl;
    // }
  }
