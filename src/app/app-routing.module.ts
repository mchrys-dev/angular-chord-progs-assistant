import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateprogComponent } from './createprog/createprog.component';

const routes: Routes = [
  { path: 'creer-progression', component: CreateprogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
