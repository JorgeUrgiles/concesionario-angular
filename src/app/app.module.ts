import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListaAutosComponent } from './components/lista-autos/lista-autos.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DetallesAutoComponent } from './pages/detalles-auto/detalles-auto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventarioComponent,
    NavBarComponent,
    ListaAutosComponent,
    FormularioComponent,
    DetallesAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
