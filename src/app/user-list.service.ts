import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private http: HttpClient) {}

  // getPosts(): Observable<any[]> {
  //   return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  // }

  // getPostsByPage(page: number, limit: number): Observable<any[]> {
  //   const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
  //   console.log(url);
  //   return this.http.get<any[]>(url);
  // }

  getPosts(page: number, limit: number): Observable<any[]> {
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
    return this.http.get<any[]>(url);
  }

  getPostsCount(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // getTotalPostsCount(): Observable<number> {
  //   const url = `https://jsonplaceholder.typicode.com/posts/posts?_page=1&_limit=1&_options=count`;
  //   return this.http.get<any[]>(url, { observe: 'response' }).pipe(
  //     map(response => {
  //       const totalCountHeader = response.headers.get('x-total-count');
  //       return totalCountHeader ? +totalCountHeader : 0;
  //     })
  //   );
  // }
}
