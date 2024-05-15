import { Injectable } from '@angular/core';
import { Community } from '../interfaces/community.interface';
import { environment } from '../../../../environments/environment';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private _communities: Community[] = [];

  constructor(private http: HttpClient) { }

  public get communities(): Community[] {
    return [...this._communities];
  }

  getCommunities(): Observable<Community[]> {

    return this.http.get<Community[]>(`${environment.apiUrl}/community`)
      .pipe(
        map(communities => this._communities = communities),
        // tap(communities => console.log(communities)),
      )
    
  }
}
