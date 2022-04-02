import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateprogComponent } from './createprog/createprog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creer-progression', component: CreateprogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
