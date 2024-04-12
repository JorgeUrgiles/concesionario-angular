import { Component } from '@angular/core';
import { AutoService } from 'src/app/services/AutoService/auto.service';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent {
  constructor(private servicio:AutoService){}

autos:any

ngOnInit(){
this.servicio.getAutos().subscribe(p=>{
  this.autos=p})
}

borrarAuto(id:any){
  this.servicio.deleteAuto(id).subscribe()
}

}
