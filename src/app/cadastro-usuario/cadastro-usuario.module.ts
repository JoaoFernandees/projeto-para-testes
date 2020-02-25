import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioRoutingModule } from './cadastro-usuario.routing.module';



@NgModule({
  declarations: [
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    CadastroUsuarioRoutingModule,
  ],
  exports: [
    CadastroUsuarioComponent
  ]
})
export class CadastroUsuarioModule { }
