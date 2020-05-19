import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HousesComponent} from './houses/houses.component';
import {SpellsComponent} from './spells/spells.component';

const routes: Routes = [
  { path: 'houses', component: HousesComponent },
  { path: 'spells', component: SpellsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
