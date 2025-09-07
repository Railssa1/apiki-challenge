import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseLast10Posts } from '../models/last-10-posts';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  private endpoint = "https://blog.apiki.com/wp-json/wp/v2/";
  private http = inject(HttpClient);

  getLastTenPosts(query?: string): Observable<{ body: ResponseLast10Posts, headers: any }> {
    const url = `${this.endpoint}/posts?_embed&categories=518`;
    return this.http.get<ResponseLast10Posts>(
      query ? `${url}${query}` : url,
      { observe: 'response' }
    ).pipe(
      map((resp) => ({
        body: resp.body ?? [],
        headers: resp.headers
      }))
    );
  }
}
