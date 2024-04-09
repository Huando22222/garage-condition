import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-even',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './even.component.html',
  styleUrl: './even.component.scss',
})
export class EVENComponent {
  title = 'fileUpload';
  images: File | undefined;
  imageUrl: string | null = null;
  multipleImages = [];
  constructor(private http: HttpClient) {}

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
