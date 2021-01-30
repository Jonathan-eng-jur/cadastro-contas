import { CadastroComponent } from './components/cadastro/cadastro.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },  
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
