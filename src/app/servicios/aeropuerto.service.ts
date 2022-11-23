import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AeropuertoModel } from '../modelos/aeropuerto.model';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  //url = "http://localhost:3000 esta url estaba en todos los serivios y se cambio por la otra"
  url = "http://localhost:3000"
  token: string = ''
  
  constructor(private http: HttpClient)
     {}
     store(aeropuerto: AeropuertoModel): Observable<AeropuertoModel> {
      return this.http.post<AeropuertoModel>(`${this.url}/aeropuertos`, {
        nombre: aeropuerto.nombre,
        ciudad: aeropuerto.ciudad,
        pais: aeropuerto.pais,
        coord_x: aeropuerto.coord_x,
        coord_y: aeropuerto.coord_y,
        siglas: aeropuerto.siglas,
        tipo: aeropuerto.tipo

      });
    }
    getAll(): Observable<AeropuertoModel[]>{
      return this.http.get<AeropuertoModel[]>(`${this.url}/aeropuertos`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    update(aeropuerto: AeropuertoModel): Observable<AeropuertoModel> {
      return this.http.patch<AeropuertoModel>(`${this.url}/aeropuertos/${aeropuerto.id}`, {
        nombre: aeropuerto.nombre,
        ciudad: aeropuerto.ciudad,
        pais: aeropuerto.pais,
        coord_x: aeropuerto.coord_x,
        coord_y: aeropuerto.coord_y,
        siglas: aeropuerto.siglas,
        tipo: aeropuerto.tipo
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    delete(id: string): Observable<AeropuertoModel[]>{
      return this.http.delete<AeropuertoModel[]>(`${this.url}/aeropuertos/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    getWithId(id: string): Observable<AeropuertoModel>{
      return this.http.get<AeropuertoModel>(`${this.url}/aeropuertos/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    }
