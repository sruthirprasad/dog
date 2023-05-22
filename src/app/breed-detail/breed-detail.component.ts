import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Location } from '@angular/common';

import { Doggo } from '../doggo/doggo';
import { DoggoService } from '../doggo/doggo.service';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.component.html',
  styleUrls: [ './breed-detail.component.css' ]
  
})
export class BreedDetailComponent implements OnInit {
    breed: Doggo | undefined;

  constructor(
    private route: ActivatedRoute,
    private doggoService: DoggoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBreedDetails();
  }
  getBreedDetails(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.doggoService.breedDetails(id)
      .subscribe((breed) => this.breed = breed);
  }
  goBack(): void {
    this.location.back();
  }
  

  
}

