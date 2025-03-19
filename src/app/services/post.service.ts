import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constants/urls';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPostsByIdUser(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.users + `/${id}/posts`);
  }
}
