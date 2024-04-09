import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket;
  private dataSubject = new BehaviorSubject<number>(0); // Khởi tạo BehaviorSubject với giá trị mặc định là 0
  public data$ = this.dataSubject.asObservable(); // Observable để subscribe trong các components

  constructor() {
    this.socket = io('http://localhost:3000');

    this.socket.on('garage-campus-AB', (data: number) => {
      this.dataSubject.next(data); // Cập nhật dữ liệu trong BehaviorSubject
    });
  }

  getSocket() {
    return this.socket;
  }
}
