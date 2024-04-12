import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoService } from 'src/app/services/AutoService/auto.service';

@Component({
  selector: 'app-detalles-auto',
  templateUrl: './detalles-auto.component.html',
  styleUrls: ['./detalles-auto.component.css']
})
export class DetallesAutoComponent {
  constructor(private servicio: AutoService, private ruta: ActivatedRoute, private route: Router) { }


 //editar
 editarPersona(auto:any){
  this.servicio.putAutos(auto.value).subscribe()
  this.route.navigate(['inventario'])
 }

  ngOnInit() {
    //leer aqui estamos mostrando los datos del objeto seleccionado peor para el examen  solo necesitamos editar 
    this.ruta.params.subscribe(parametro => {
      this.servicio.getAuto(parametro['idauto']).subscribe(p => {
        this.id = p.id
        this.modelo = p.modelo
        this.marca = p.marca
        this.anio = p.anio
        this.propietarios = p.propietario

      })

    })
  }
  id: any
  modelo: any
  marca: any
  anio: any
  propietarios: any






}
