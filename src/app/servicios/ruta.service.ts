import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RutaModel } from '../modelos/ruta.model';
@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(private http: HttpClient) { }
    url = "http://localhost:3000"
token: string = ''

store(ruta: RutaModel): Observable<RutaModel> {
  return this.http.post<RutaModel>(`${this.url}/rutas`, {
    origen: ruta.origen,
    destino: ruta.destino,
    tiempo: ruta.tiempo
  });
}

getAll(): Observable<RutaModel[]>{
  return this.http.get<RutaModel[]>(`${this.url}/rutas`, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}

update(ruta: RutaModel): Observable<RutaModel> {
  return this.http.patch<RutaModel>(`${this.url}/usuarios/${ruta.id}`, {
    origen: ruta.origen,
    destino: ruta.destino,
    tiempo: ruta.tiempo
  }, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  });
}

delete(id: string): Observable<RutaModel[]>{
  return this.http.delete<RutaModel[]>(`${this.url}/rutas/${id}`, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}

getWithId(id: string): Observable<RutaModel>{
  return this.http.get<RutaModel>(`${this.url}/rutas/${id}`,{
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}

}
