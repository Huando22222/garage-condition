// // near-garages.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { NearGarage } from '../interface/near-garage.model'; // Import model

// @Injectable({
//   providedIn: 'root'
// })
// export class NearGaragesService {

//   private apiUrl = 'http://localhost:3000';

//   constructor(private http: HttpClient) { }

//   getNearGarages(): Observable<NearGarage[]> {
//     return this.http.get<NearGarage[]>(this.apiUrl);
//   }
// }

// near-garages.service.ts


// import { Injectable } from '@angular/core';
// import { NearGarage } from '../interface/near-garage.model'; // Import model

// @Injectable({
//   providedIn: 'root'
// })
// export class NearGaragesService {

//   private apiUrl = 'http://localhost:3000';

//   constructor() { }

//   async getNearGarages(): Promise<NearGarage[]> {
//     const data = await fetch(this.apiUrl);
//     return await data.json() ?? [];
//   }
// }



import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { NearGarage } from '../interface/near-garage.model'; // Import model

@Injectable({
  providedIn: 'root',
})
export class NearGaragesService {
  private apiUrl = 'http://localhost:3000';

  
  constructor(private http: HttpClient) {}

   getNearGarages(){
    const dataUrl = `${this.apiUrl}`;
    return this.http.get<Array<NearGarage>>(dataUrl);
  }
}
