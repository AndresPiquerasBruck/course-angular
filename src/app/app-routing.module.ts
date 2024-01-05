import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { CuitattiComponent } from './componenti/cuitatti/cuitatti.component';
import { CuitattoComponent } from './componenti/cuitatto/cuitatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './componenti/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatti', component: ContattiComponent, canActivate: [AuthGuard], canActivateChild:[AuthGuard],
    children: [{ path: ':id', component: ContattoComponent }]},
  { path: 'cuitatti',
    component: CuitattiComponent,
    children: [{ path: ':id', component: CuitattoComponent }]},
  { path: '404', component: NotfoundComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
