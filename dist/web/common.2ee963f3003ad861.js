"use strict";(self.webpackChunkWeb=self.webpackChunkWeb||[]).push([[592],{4142:(a,o,s)=>{s.d(o,{X:()=>h});var r=s(529),i=s(8256);let h=(()=>{class e{constructor(t){this.http=t,this.url="https://apiloopback1.herokuapp.com/",this.token=""}store(t){return this.http.post(`${this.url}/aeropuertos`,{nombre:t.nombre,ciudad:t.ciudad,pais:t.pais,coord_x:t.coord_x,coord_y:t.coord_y,siglas:t.siglas,tipo:t.tipo})}getAll(){return this.http.get(`${this.url}/aeropuertos`,{headers:new r.WM({Authorization:`Bearer ${this.token}`})})}update(t){return this.http.patch(`${this.url}/aeropuertos/${t.id}`,{nombre:t.nombre,ciudad:t.ciudad,pais:t.pais,coord_x:t.coord_x,coord_y:t.coord_y,siglas:t.siglas,tipo:t.tipo},{headers:new r.WM({Authorization:`Bearer ${this.token}`})})}delete(t){return this.http.delete(`${this.url}/aeropuertos/${t}`,{headers:new r.WM({Authorization:`Bearer ${this.token}`})})}getWithId(t){return this.http.get(`${this.url}/aeropuertos/${t}`,{headers:new r.WM({Authorization:`Bearer ${this.token}`})})}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(r.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);