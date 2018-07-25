import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService {

  private baseUrl = `http://dev.tapman.beer:3000`;

  constructor(private httpClient: HttpClient) { }

  get(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/restaurants`, options)
      .toPromise();
  }

  listOwnBeers(restaurant): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/restaurants/${restaurant}`, options)
      .toPromise();
  }

  pushBeer(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/restaurants/push`, data, options)
      .toPromise();
  }

  removeBeer(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/restaurants/remove`, data, options)
      .toPromise();
  }

}
