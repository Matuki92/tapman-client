import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BeerService {

  private baseUrl = `http://localhost:3000`;

  constructor(private httpClient: HttpClient) { }

  getBeers(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/beers/all`, options)
      .toPromise();
  }

  add(beer): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/beers/add`, beer, options)
      .toPromise();
  }

}
