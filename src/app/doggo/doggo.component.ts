import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {DoggoService} from '../doggo/doggo.service';
import { Doggo } from './doggo';

@Component({
  selector: 'app-doggo',
  templateUrl: './doggo.component.html',
  styleUrls: [ './doggo.component.css' ]

})
export class DoggoComponent implements OnInit {

   //doggo$!: Observable<Doggo[]>;

   doggo: Doggo[] = [];
  constructor(private dogService: DoggoService) {
  }
  ngOnInit(): void {
    //this.doggo$ = this.dogService.dogBreeds();
    //console.log('Blah',this.doggo$ )
    this.getDoggo();
  }
  getDoggo(): void {
    this.dogService.dogBreeds()
    .subscribe(doggo => this.doggo = doggo);
  }
  
  
}