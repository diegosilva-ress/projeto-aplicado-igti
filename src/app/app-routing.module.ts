import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SindicoComponent} from './sindico/sindico.component';
import {MoradorComponent} from './morador/morador.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sindico', component: SindicoComponent},
  {path: 'morador', component: MoradorComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
