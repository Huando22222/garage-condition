import { Routes } from '@angular/router';
import { NearGarageComponent } from './component/near-garage/near-garage.component';
import { GarageConditionComponent } from './component/garage-condition/garage-condition.component'; 
import {EVENComponent} from './component/even/even.component';

export const routes: Routes = [
  { path: 'Near_Garage', component: NearGarageComponent },
  { path: '', component: GarageConditionComponent },
  { path: 'even', component: EVENComponent },
];
