import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
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
  minDate: Date;
  maxDate: Date;
 
  constructor(private http: HttpClient) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
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

    this.http.post<any>('http://localhost:3000/post/new', formData).subscribe(
      (res: any) => console.log(res),
      (err: any) => {
        console.log(err);
        console.log('đasaderr');
      }
    );
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
