import { Injectable } from '@angular/core';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  getSocket() {
    return this.socket;
  }
}
