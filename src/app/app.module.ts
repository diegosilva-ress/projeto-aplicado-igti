import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SindicoComponent } from './sindico/sindico.component';
import { MoradorComponent } from './morador/morador.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { EntreContatoComponent } from './entre-contato/entre-contato.component';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import { QuadroAvisosComponent } from './quadro-avisos/quadro-avisos.component';
import {MatCardModule} from '@angular/material/card';
import { ConsultaPagamentosComponent } from './consulta-pagamentos/consulta-pagamentos.component';
import { CriarAvisoComponent } from './criar-aviso/criar-aviso.component';
import {MatFileUploadModule} from 'angular-material-fileupload';
import { CaixaComponent } from './caixa/caixa.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    SindicoComponent,
    MoradorComponent,
    HomeComponent,
    EntreContatoComponent,
    QuadroAvisosComponent,
    ConsultaPagamentosComponent,
    CriarAvisoComponent,
    CaixaComponent,
    FuncionariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatFileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
