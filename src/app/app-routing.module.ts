import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { DetallesAutoComponent } from './pages/detalles-auto/detalles-auto.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'inventario',component:InventarioComponent},
  {path:'auto/:idauto', component:DetallesAutoComponent},


  {path:"", redirectTo:'home', pathMatch:'full' },
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
