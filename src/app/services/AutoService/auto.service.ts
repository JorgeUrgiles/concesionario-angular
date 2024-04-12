import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  constructor(private http:HttpClient){}

  private API_AUTOS="http://localhost:3000/autos"

//leer

getAutos():Observable<any>{
  return (this.http.get(this.API_AUTOS))
}
//buscar por id
getAuto(id:any):Observable<any>{
  return this.http.get(`${this.API_AUTOS}/${id}`)
}

//guardar
postAutos(auto:any):Observable<any>{
  return this.http.post(this.API_AUTOS, auto)
  
}
//editar
putAutos(auto:any):Observable<any>{
  return this.http.put(`${this.API_AUTOS}/${auto.id}`,auto)
}

//eliminar
deleteAuto(id:any):Observable<any>{
  return this.http.delete(`${this.API_AUTOS}/${id}`)
}

}
