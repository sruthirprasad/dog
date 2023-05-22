import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Doggo } from './doggo';


@Injectable({
  providedIn: 'root'
})
export class DoggoService {
  endpoint = 'https://api.thedogapi.com/v1/'
  constructor(private httpClient: HttpClient) {
  }

  dogBreeds(): Observable<Doggo[]> {
    return this.httpClient
      .get<Doggo[]>(this.endpoint + `breeds`);
  }

  breedDetails(id: number): Observable<Doggo> {
    return this.httpClient
      .get<Doggo>(this.endpoint + `breeds/` + id);
  }

  selectBreed(name: string) {

    return this.httpClient
      .get(`https://dog.ceo/api/breed/` + name + `/images/random/14`);

  }
  breedList(){
    return this.httpClient
    .get(`https://dog.ceo/api/breeds/list/all`);

  }


}