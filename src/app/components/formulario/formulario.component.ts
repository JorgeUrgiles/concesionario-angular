import { Component } from '@angular/core';
import { AutoService } from 'src/app/services/AutoService/auto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private servicio:AutoService){}
  id:any
  modelo:any
  marca:any
  anio:any
  propietarios:any

  guardarAuto(auto:any){
    this.servicio.postAutos(auto.value).subscribe()
  }
  


}
