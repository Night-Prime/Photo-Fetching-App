import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      // making a get request to the API
      headers:{
        Authorization: 'Client-ID p9pXV6fdzLiJ9kNtBAuuhpvudLKggbjyT8RJTOtW08E'
      }
    });
  }
}
