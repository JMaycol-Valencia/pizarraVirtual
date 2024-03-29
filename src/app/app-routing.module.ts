import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'curso', component: CursoComponent
  },
  {
    path: 'contactos', component: ContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
