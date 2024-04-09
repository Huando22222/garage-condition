import { Routes } from '@angular/router';
import { NearGarageComponent } from './component/near-garage/near-garage.component';
import { GarageConditionComponent } from './component/garage-condition/garage-condition.component'; 
import { NewEventComponent } from './component/new-event/new-event.component';
import { EventComponent } from './component/event/event.component';

export const routes: Routes = [
  { path: 'Near_Garage', component: NearGarageComponent },
  { path: '', component: GarageConditionComponent },
  { path: 'event', component: EventComponent },
  { path: 'new-event', component: NewEventComponent },
];
