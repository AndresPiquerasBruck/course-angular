import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { CuitattiComponent } from './componenti/cuitatti/cuitatti.component';
import { CuitattoComponent } from './componenti/cuitatto/cuitatto.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contatti', component: ContattiComponent, 
  
  children: [
    {path: ':id', component: ContattoComponent},
  ]},
  { path: 'cuitatti', component: CuitattiComponent, 
  
  children: [
    {path: ':id', component: CuitattoComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
