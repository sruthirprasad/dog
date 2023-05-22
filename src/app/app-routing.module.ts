import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoggoComponent } from './doggo/doggo.component';
import {BreedDetailComponent} from './breed-detail/breed-detail.component'
import { SelectBreedComponent } from './select-breed/select-breed.component';
const routes: Routes = [
  { path: '', redirectTo: '/doggo', pathMatch: 'full' },
  {path: 'doggo', component: DoggoComponent },
  { path: 'breed-detail/:id', component: BreedDetailComponent },
  { path: 'select-breed', component: SelectBreedComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
