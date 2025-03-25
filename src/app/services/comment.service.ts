import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../constants/urls';
import { IComment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getCommentsByPostId(id: number): Observable<IComment[]> {
    console.log('Requesting comments for postId:', id);
    return this.httpClient.get<IComment[]>(urls.posts + `/${id}/comments`);
  }
}
