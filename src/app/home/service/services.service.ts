import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient,) { }


  public getListAPI(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }


  public getSearchAPI(): Observable<any> {
    return this.http.get<any>(this.baseUrl +"search/HELLO");
  }

  public getDeleteAPI(): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "delete");
  }

}
