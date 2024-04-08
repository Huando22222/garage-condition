import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../redux/states/campus-ab/campus-ab.action';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private store: Store<{ count: number }>) {}

  incrementTicket(ticket: number) {
    console.log('increment ' + ticket);
    this.store.dispatch(increment({ ticket }));
  }

  decrementTicket(ticket: number) {
    this.store.dispatch(decrement({ ticket }));
  }

  resetTicket() {
    this.store.dispatch(reset());
  }
}
