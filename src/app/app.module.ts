import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { TypeUserComponent } from './components/type-user/type-user.component'; // Importa TypeUserComponent
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { BitacoraCComponent } from './components/bitacora-c/bitacora-c.component';
import { InterfazCComponent } from './components/interfaz-c/interfaz-c.component';
import { TecnicoComponent } from './components/tecnico/tecnico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


    TypeUserComponent,
    BitacoraCComponent,
    InterfazCComponent,
    TecnicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule, // Asegúrate de que ReactiveFormsModule esté importado aquí
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    SharedModule,
    CommonModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports: [
    TypeUserComponent
  ]
})
export class AppModule { }
export class TypeUserModule { }
