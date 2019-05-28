import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Image } from './image-fields';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url = '../assets/images-list.json';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.url);
  }
}

