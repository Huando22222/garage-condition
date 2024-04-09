import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule,FormControl } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-even',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    HttpClientModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.scss',
})
export class NewEventComponent {
  // currentDate: string;
  // multipleImages = [];

  imageUrl: string | null = null;
  //forms
  images: File | undefined;
  eventName: string = '';
  eventDescription: string = '';
  eventDate: Date | null = null;
  vehicleCount: number | null = null;

  constructor(private http: HttpClient) {
    // const currentYear = new Date().getFullYear();
    // this.currentDate = new Date().toISOString().slice(0, 16);
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

  // selectMultipleImage(event: any) {
  //   if (event.target?.files.length > 0) {
  //     this.multipleImages = event.target.files;
  //   }
  // }

  onSubmit() {
    const formData = new FormData();
    if (this.images) {
      formData.append('file', this.images);
    }

    formData.append('eventName', this.eventName);
    formData.append('eventDescription', this.eventDescription);
    if (this.eventDate) {
      formData.append('eventDate', this.eventDate.toISOString());
    }
    // formData.append('end_datetime', this.endDate.toISOString()); // Nếu bạn có end_datetime
    if (this.vehicleCount !== null) {
      formData.append('vehicleCount', this.vehicleCount.toString());
    }

    this.http
      .post<any>('https://garage-condition-be.onrender.com/event/new', formData)
      .subscribe(
        (res: any) => {
          console.log(res);
          alert('Sự kiện đã được tạo thành công!');
          this.resetForm();
        },
        (err: any) => {
          console.error(err);
          alert('Đã có lỗi xảy ra khi tạo sự kiện!');
        }
      );
  }

  resetForm() {
    this.eventName = '';
    this.eventDescription = '';
    this.eventDate = null;
    this.vehicleCount = null;
    this.imageUrl = null;
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
