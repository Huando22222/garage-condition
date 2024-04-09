import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-even',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [HttpClientModule, CommonModule,MatDatepickerModule,MatInputModule,MatFormFieldModule],
  templateUrl: './even.component.html',
  styleUrl: './even.component.scss',
})
export class EVENComponent {
  title = 'fileUpload';
  images: File | undefined;
  currentDate: string;
  imageUrl: string | null = null;
  multipleImages = [];
  // eventName: string | undefined;
  // eventDescription: string | undefined;
  // startDate: string | undefined;
  // endDate: string | undefined;
  // vehicleCount: string | undefined;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.currentDate = new Date().toISOString().slice(0, 16);
    
  }

  ngOnInit() {}

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
    }
  }
 
  selectMultipleImage(event: any) {
    if (event.target?.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    if (this.images) {
      formData.append('file', this.images);
    }
    

    // formData.append('event_name', this.eventName!);
    // formData.append('description', this.eventDescription!);
    // formData.append('start_datetime', this.startDate!);
    // formData.append('end_datetime', this.endDate!);
    // formData.append('number_of_vehicle', this.vehicleCount!);

  
    // this.http.post<any>('http://localhost:3000/event/new', formData).subscribe(
    //   (res: any) => console.log(res),
    //   (err: any) => {
    //     console.log(err);
    //     console.log('đasaderr');
    //   }
    // );
  }
  

  // onMultipleSubmit() {
  //   const formData = new FormData();
  //   for (let img of this.multipleImages) {
  //     formData.append('files', img);
  //   }

  //   this.http
  //     .post<any>('http://localhost:3000/multipleFiles', formData)
  //     .subscribe(
  //       (res) => console.log(res),
  //       (err) => console.log(err)
  //     );
  // }
}
