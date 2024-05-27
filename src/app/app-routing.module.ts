import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



import { TypeUserComponent } from './components/type-user/type-user.component';
import { BitacoraCComponent } from './components/bitacora-c/bitacora-c.component';
import { authGuard } from './guards/auth.guard';
import { TecnicoComponent } from './components/tecnico/tecnico.component';

const routes: Routes = [

  {
path:'',
component: BitacoraCComponent,
},
  {
    path: 'typeUser',
    component: TypeUserComponent,


  
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'tecnico',
    component: TecnicoComponent
  },


  {
    path: 'register',
    component: RegisterComponent,
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
