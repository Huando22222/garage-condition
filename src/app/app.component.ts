import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { reset, setTicket } from './store/actions/campus-ab.action';
import { FooterComponent } from './component/layout/footer/footer.component';
import { HeaderComponent } from './component/layout/header/header.component';
// import { Socket } from 'ngx-socket-io';
// import { SocketService } from './service/socket.service';
////////////////
import { AsyncPipe, CommonModule } from '@angular/common';

import io from 'socket.io-client';
import { Observable } from 'rxjs';

import { NgZone } from '@angular/core';
const socket = io('https://garage-condition-be.onrender.com/');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    // CommonModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  ticket$: Observable<number>;
  constructor(private zone: NgZone) {
    this.ticket$ = this.store.select('ticket');
  }

  ngOnInit(): void {
    // this.ticket$.subscribe((data) => {
    // });

    socket.on('garage-campus-AB', (data: number) => {
      // console.log('Received random number from server:', data);
      this.zone.run(() => {
        // Run this inside the Angular zone
        this.store.dispatch(setTicket({ ticket: data }));
      });
      //this.cdRef.detectChanges();
    });
  }
}
