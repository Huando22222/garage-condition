import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NearGaragesService } from '../../service/near-garage.service';
import { NearGarage } from '../../interface/near-garage.model';
@Component({
  selector: 'app-near-garage',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './near-garage.component.html',
  styleUrl: './near-garage.component.scss'
})
export class NearGarageComponent implements AfterViewInit {
  nearGarages?: NearGarage[] ;

   constructor(private nearGaragesService: NearGaragesService) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
 

  ngOnInit() {
    // Khi component được khởi tạo, gọi goToLocationOnMap() để hiển thị map ngay khi trang được mở
    this.getNearGarages(); 
    this.goToLocationOnMap();
  }
    getNearGarages() {
      this.nearGaragesService.getNearGarages().pipe().subscribe((data: NearGarage[]) => {
        this.nearGarages = data;
        console.log(this.nearGarages[0]);
      });
    }
  
   
  goToLocationMap() {
    window.location.href = 'https://www.google.com/maps/place/B%C3%A3i+Gi%E1%BB%AF+Xe+V%C3%A2n+%C4%90%C3%A0o/@10.801965,106.7137339,20.04z/data=!4m6!3m5!1s0x317528a4fd24ffff:0x8b023eeb84718489!8m2!3d10.8021414!4d106.7139389!16s%2Fg%2F11pkb7xhl4?hl=vi-VN&entry=ttu';
  }
  goToCustomLocation() {
    // Lấy đường link mới dựa trên tọa độ của vị trí bạn muốn hiển thị
    const locationUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.509044467175!2d106.7122014!3d10.8017211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a4fd24ffff%3A0x8b023eeb84718489!2zQsO6aSBHacOqIFhlIFbDom4gxJDhu6lj!5e0!3m2!1sen!2suk!4v1646811013683!5m2!1sen!2suk';

    // Đặt lại src của iframe để hiển thị bản đồ mới
    const iframeElement = document.getElementById('mapIframe') as HTMLIFrameElement;
    iframeElement.src = locationUrl;
    
  }
  goToLocationOnMap() {
    // Đường link của bản đồ HUTECH University
    const hutechLocationUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.509044467175!2d106.7142494!3d10.8015646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a459cb43ab%3A0x6c3d29d370b52a7e!2sHUTECH%20University%20%E2%80%93%20Sai%20Gon%20Campus!5e0!3m2!1sen!2suk!4v1646811013683!5m2!1sen!2suk';

    // Đặt lại src của iframe để hiển thị bản đồ HUTECH University
    const iframeElement = document.getElementById('mapIframe') as HTMLIFrameElement;
    iframeElement.src = hutechLocationUrl;
}

}
