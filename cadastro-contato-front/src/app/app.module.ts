import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroContatoComponent } from './components/cadastro-contato/cadastro-contato.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListaContatoComponent } from './components/lista-contato/lista-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,        
    CadastroContatoComponent,
    CadastroComponent,
    ListaContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    CommonModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

