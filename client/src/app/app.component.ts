import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './component/layout/footer/footer.component';
import { HeaderComponent } from './component/layout/header/header.component';
// import { Socket } from 'ngx-socket-io';
// import { SocketService } from './service/socket.service';
////////////////
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,HeaderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  number?: number;

  // constructor(private socket: Socket) {}
  constructor() { }
  ngOnInit(): void {
    try {
      socket.on('garage-campus-AB', (data) => {
        console.log(data);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // ngAfterViewInit(): void {
  //   try {
  //     this.socketService.setupSocketConnection(); // Sử dụng service để setup kết nối socket
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // ngOnInit(): void {
  //   try {
  //     this.socketService.setupSocketConnection(); // Sử dụng service để setup kết nối socket
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
}


// constructor(private socket: Socket) {}

//   ngOnInit(): void {
//     try {
//       this.socket.fromEvent('garage-campus-AB').subscribe((data) => {
//            console.log(data); // In ra giá trị của biến number
//       });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
// }

