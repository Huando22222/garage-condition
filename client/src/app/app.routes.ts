import { Routes } from '@angular/router';
import { NearGarageComponent } from './component/near-garage/near-garage.component';
import { GarageConditionComponent } from './component/garage-condition/garage-condition.component'; 

export const routes: Routes = [
  { path: 'Near_Garage', component: NearGarageComponent },
  { path: '', component: GarageConditionComponent },
];
