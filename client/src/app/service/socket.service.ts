import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  setupSocketConnection(): void {
    this.socket.fromEvent('garage-campus-AB').subscribe((data) => {
        console.log(data);
    });
  }
}
