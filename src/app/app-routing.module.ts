import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SloginComponent } from './slogin/slogin.component';
import { SmotDePasseOublierComponent } from './smot-de-passe-oublier/smot-de-passe-oublier.component';


const routes: Routes = [
  {path:"Slogin",component:SloginComponent},
  {path:"SmotDePasseOublier",component:SmotDePasseOublierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
