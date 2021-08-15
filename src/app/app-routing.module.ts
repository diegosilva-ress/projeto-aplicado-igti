import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SindicoComponent} from './sindico/sindico.component';
import {MoradorComponent} from './morador/morador.component';
import {HomeComponent} from './home/home.component';
import {EntreContatoComponent} from './entre-contato/entre-contato.component';
import {QuadroAvisosComponent} from './quadro-avisos/quadro-avisos.component';
import {ConsultaPagamentosComponent} from './consulta-pagamentos/consulta-pagamentos.component';
import {CriarAvisoComponent} from './criar-aviso/criar-aviso.component';
import {CaixaComponent} from './caixa/caixa.component';
import {ListaPagamentosComponent} from './lista-pagamentos/lista-pagamentos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sindico', component: SindicoComponent},
  {path: 'morador', component: MoradorComponent},
  {path: 'contato', component: EntreContatoComponent},
  {path: 'avisos', component: QuadroAvisosComponent},
  {path: 'consultaPagamentos', component: ConsultaPagamentosComponent},
  {path: 'criarAviso', component: CriarAvisoComponent},
  {path: 'caixa', component: CaixaComponent},
  {path: 'listaPagamentos', component: ListaPagamentosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
