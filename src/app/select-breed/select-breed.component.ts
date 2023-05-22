import { Component, OnInit } from '@angular/core';
import {  Location } from '@angular/common';

import { Observable, Subject } from 'rxjs';



 import { Doggo } from '../doggo/doggo';
 import { DoggoService } from '../doggo/doggo.service';

@Component({
  selector: 'app-select-breed',
  templateUrl: './select-breed.component.html',
  styleUrls: [ './select-breed.component.css' ]
})
export class SelectBreedComponent implements OnInit {

breed: Doggo | undefined;
selectResponse :any;
list:any;

url:string='';
  constructor(
    private dogService: DoggoService,
    private location: Location
    ) {
  }
  ngOnInit(): void {
     this.getBreedList();
  }
  goBack(): void {
    this.location.back();
  }
  getBreedList(): void {
    this.dogService.breedList()
    .subscribe((list) => this.list = list);
  }
  onChange(name:string) {
    console.log(name,this.list.message);
   
    this.dogService.selectBreed(name).subscribe((selectResponse) => this.selectResponse = selectResponse);
   
  }
  
}

