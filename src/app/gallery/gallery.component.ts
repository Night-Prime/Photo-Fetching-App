import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../photo-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  storedUrl: string = '';
  buttonPhoto:any;

  constructor(private photoService: PhotoServiceService) {
    this.fetchPhoto();
   }

   onPhotoClick() {
    this.fetchPhoto();
   }

  //  a helper function
   fetchPhoto() {
    this.photoService.getPhoto().subscribe((response) => {
      this.storedUrl = response.urls.regular;
    });
   }

  ngOnInit(): void {
  }

}
