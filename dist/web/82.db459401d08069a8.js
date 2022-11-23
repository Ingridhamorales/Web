"use strict";(self.webpackChunkWeb=self.webpackChunkWeb||[]).push([[82],{82:(C,_,r)=>{r.r(_),r.d(_,{VuelosModule:()=>V});var p=r(6895),l=r(9965),o=r(433);class g{}var m=r(5226),d=r.n(m),e=r(8256),c=r(529);let u=(()=>{class t{constructor(i){this.http=i,this.url="https://apiloopback1.herokuapp.com/",this.token=""}store(i){return this.http.post(`${this.url}/vuelos`,{fecha_inicio:i.fecha_inicio,hora_inicio:i.hora_inicio,fecha_fin:i.fecha_fin,hora_fin:i.hora_fin,asientos_vendidos:i.asientos_vendidos,nombre_piloto:i.nombre_piloto,rutaid:i.rutaid})}getAll(){return this.http.get(`${this.url}/vuelos`,{headers:new c.WM({Authorization:`Bearer ${this.token}`})})}update(i){return this.http.patch(`${this.url}/vuelos/${i.id}`,{fecha_inicio:i.fecha_inicio,hora_inicio:i.hora_inicio,fecha_fin:i.fecha_fin,hora_fin:i.hora_fin,asientos_vendidos:i.asientos_vendidos,nombre_piloto:i.nombre_piloto,rutaid:i.rutaid},{headers:new c.WM({Authorization:`Bearer ${this.token}`})})}delete(i){return this.http.delete(`${this.url}/vuelos/${i}`,{headers:new c.WM({Authorization:`Bearer ${this.token}`})})}getWithId(i){return this.http.get(`${this.url}/vuelos/${i}`,{headers:new c.WM({Authorization:`Bearer ${this.token}`})})}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(c.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{constructor(i,n,s){this.fb=i,this.vueloService=n,this.router=s,this.fgValidacion=this.fb.group({fecha_inicio:["",[o.kI.required]],hora_inicio:["",[o.kI.required]],fecha_fin:["",[o.kI.required]],hora_fin:["",[o.kI.required]],asientos_vendidos:["",[o.kI.required]],nombre_piloto:["",[o.kI.required]],rutaid:["",[o.kI.required]]})}ngOnInit(){}store(){let i=new g;i.fecha_inicio=this.fgValidacion.controls.fecha_inicio.value,i.hora_inicio=this.fgValidacion.controls.hora_inicio.value,i.fecha_fin=this.fgValidacion.controls.fecha_fin.value,i.hora_fin=this.fgValidacion.controls.hora_fin.value,i.asientos_vendidos=this.fgValidacion.controls.asientos_vendidos.value,i.nombre_piloto=this.fgValidacion.controls.nombre_piloto.value,i.rutaid=this.fgValidacion.controls.rutaid.value,this.vueloService.store(i).subscribe(n=>{d().fire("Creado correctamente!","","success"),this.router.navigate(["/vuelos/get"])},n=>{console.log(n),alert("Error en el envio")})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(o.qu),e.Y36(u),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create"]],decls:40,vars:2,consts:[[1,"container"],[1,"center-align"],[1,"col","s12",3,"formGroup","ngSubmit"],[1,"row"],[1,"input-field","col","s6"],["formControlName","fecha_inicio","type","text",1,"validate"],["for","fecha_inicio"],["formControlName","hora_inicio","type","text",1,"validate"],["for","hora_inicio"],["formControlName","fecha_fin","type","text",1,"validate"],["for","fecha_fin"],["formControlName","hora_fin","type","text",1,"validate"],["for","hora_fin"],["formControlName","asientos_vendidos","type","text",1,"validate"],["for","asientos_vendidos"],["formControlName","nombre_piloto","type","text",1,"validate"],["for","nombre_piloto"],["formControlName","rutaid","type","text",1,"validate"],["for","rutaid"],[1,"row","center-align"],["type","submit","name","action",1,"btn","waves-effect","waves-light",3,"disabled"],[1,"material-icons","right"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Registrar Vuelo"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return n.store()}),e.TgZ(4,"div",3)(5,"div",4),e._UZ(6,"input",5),e.TgZ(7,"label",6),e._uU(8,"Fecha inicio"),e.qZA()(),e.TgZ(9,"div",4),e._UZ(10,"input",7),e.TgZ(11,"label",8),e._uU(12,"Hora inicio"),e.qZA()()(),e.TgZ(13,"div",3)(14,"div",4),e._UZ(15,"input",9),e.TgZ(16,"label",10),e._uU(17,"Fecha fin"),e.qZA()(),e.TgZ(18,"div",4),e._UZ(19,"input",11),e.TgZ(20,"label",12),e._uU(21,"Hora fin"),e.qZA()()(),e.TgZ(22,"div",3)(23,"div",4),e._UZ(24,"input",13),e.TgZ(25,"label",14),e._uU(26,"Asientos vendidos"),e.qZA()(),e.TgZ(27,"div",4),e._UZ(28,"input",15),e.TgZ(29,"label",16),e._uU(30,"Nombre del piloto"),e.qZA()()(),e.TgZ(31,"div",4),e._UZ(32,"input",17),e.TgZ(33,"label",18),e._uU(34,"Rutaid"),e.qZA()(),e.TgZ(35,"div",19)(36,"button",20),e._uU(37,"Enviar "),e.TgZ(38,"i",21),e._uU(39,"send"),e.qZA()()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",n.fgValidacion),e.xp6(33),e.Q6J("disabled",!n.fgValidacion.valid))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),t})(),Z=(()=>{class t{constructor(i,n,s,f){this.fb=i,this.vueloService=n,this.router=s,this.route=f,this.fgValidacion=this.fb.group({id:["",[o.kI.required]],fecha_inicio:["",[o.kI.required]],hora_inicio:["",[o.kI.required]],fecha_fin:["",[o.kI.required]],hora_fin:["",[o.kI.required]],asientos_vendidos:["",[o.kI.required]],nombre_piloto:["",[o.kI.required]],rutaid:["",[o.kI.required]]})}getWithId(i){this.vueloService.getWithId(i).subscribe(n=>{console.log(n),this.fgValidacion.controls.id.setValue(i),this.fgValidacion.controls.fecha_inicio.setValue(n.fecha_inicio),this.fgValidacion.controls.hora_inicio.setValue(n.hora_inicio),this.fgValidacion.controls.fecha_fin.setValue(n.fecha_fin),this.fgValidacion.controls.hora_fin.setValue(n.hora_fin),this.fgValidacion.controls.asientos_vendidos.setValue(n.asientos_vendidos),this.fgValidacion.controls.nombre_piloto.setValue(n.nombre_piloto),this.fgValidacion.controls.rutaid.setValue(n.rutaid)})}edit(){let i=new g;i.id=this.fgValidacion.controls.id.value,i.fecha_inicio=this.fgValidacion.controls.fecha_inicio.value,i.hora_inicio=this.fgValidacion.controls.hora_inicio.value,i.fecha_fin=this.fgValidacion.controls.fecha_fin.value,i.hora_fin=this.fgValidacion.controls.hora_fin.value,i.asientos_vendidos=this.fgValidacion.controls.asientos_vendidos.value,i.nombre_piloto=this.fgValidacion.controls.nombre_piloto.value,i.rutaid=this.fgValidacion.controls.rutaid.value,this.vueloService.update(i).subscribe(n=>{d().fire("Editado Correctamente!","","success"),this.router.navigate(["/vuelos/get"])},n=>{console.log(n),alert("Error en el envio")})}ngOnInit(){this.getWithId(this.route.snapshot.params.id)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(o.qu),e.Y36(u),e.Y36(l.F0),e.Y36(l.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-edit"]],decls:41,vars:2,consts:[[1,"container"],[1,"center-align"],[1,"col","s12",3,"formGroup","ngSubmit"],["formControlName","id","type","hidden",1,"validate"],[1,"row"],[1,"input-field","col","s6"],["formControlName","fecha_inicio","type","text",1,"validate"],["for","fecha_inicio",1,"active"],["formControlName","hora_inicio","type","text",1,"validate"],["for","hora_inicio",1,"active"],["formControlName","fecha_fin","type","text",1,"validate"],["for","fecha_fin",1,"active"],["formControlName","hora_fin","type","text",1,"validate"],["for","hora_fin",1,"active"],["formControlName","asientos_vendidos","type","text",1,"validate"],["for","asientos_vendidos",1,"active"],["formControlName","nombre_piloto","type","text",1,"validate"],["for"," nombre_piloto",1,"active"],["formControlName","rutaid","type","text",1,"validate"],["for","rutaid",1,"active"],[1,"row","center-align"],["type","submit","name","action",1,"btn","waves-effect","waves-light",3,"disabled"],[1,"material-icons","right"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Editar Vuelos"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return n.edit()}),e._UZ(4,"input",3),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"input",6),e.TgZ(8,"label",7),e._uU(9,"Fecha Inicio"),e.qZA()(),e.TgZ(10,"div",5),e._UZ(11,"input",8),e.TgZ(12,"label",9),e._uU(13,"Hora Inicio"),e.qZA()()(),e.TgZ(14,"div",4)(15,"div",5),e._UZ(16,"input",10),e.TgZ(17,"label",11),e._uU(18,"Fecha Fin"),e.qZA()(),e.TgZ(19,"div",5),e._UZ(20,"input",12),e.TgZ(21,"label",13),e._uU(22,"Hora Fin"),e.qZA()()(),e.TgZ(23,"div",4)(24,"div",5),e._UZ(25,"input",14),e.TgZ(26,"label",15),e._uU(27,"Asientos Vendidos"),e.qZA()(),e.TgZ(28,"div",5),e._UZ(29,"input",16),e.TgZ(30,"label",17),e._uU(31,"Nombre del Piloto"),e.qZA()()(),e.TgZ(32,"div",5),e._UZ(33,"input",18),e.TgZ(34,"label",19),e._uU(35,"Rutaid"),e.qZA()(),e.TgZ(36,"div",20)(37,"button",21),e._uU(38,"Editar "),e.TgZ(39,"i",22),e._uU(40,"send"),e.qZA()()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",n.fgValidacion),e.xp6(34),e.Q6J("disabled",!n.fgValidacion.valid))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),t})();function b(t,a){if(1&t){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"a",4)(17,"i",5),e._uU(18,"edit"),e.qZA()(),e.TgZ(19,"button",6),e.NdJ("click",function(){const f=e.CHM(i).$implicit,q=e.oxw();return e.KtG(q.delete(f.id))}),e.TgZ(20,"i",5),e._uU(21,"delete"),e.qZA()()()()}if(2&t){const i=a.$implicit;e.xp6(2),e.Oqu(i.fecha_inicio),e.xp6(2),e.Oqu(i.hora_inicio),e.xp6(2),e.Oqu(i.fecha_fin),e.xp6(2),e.Oqu(i.hora_fin),e.xp6(2),e.Oqu(i.asientos_vendidos),e.xp6(2),e.Oqu(i.nombre_piloto),e.xp6(2),e.Oqu(i.rutaid),e.xp6(2),e.MGl("routerLink","/vuelos/edit/",i.id,"")}}let T=(()=>{class t{constructor(i){this.vueloService=i,this.listado=[]}getAll(){this.vueloService.getAll().subscribe(i=>{this.listado=i,console.log(i)})}delete(i){console.log(i),d().fire({title:"\xbfEsta seguro de eliminar este registro?",showCancelButton:!0,confirmButtonText:"Aceptar"}).then(n=>{n.isConfirmed&&this.vueloService.delete(i).subscribe(s=>{d().fire("\xa1Eliminado correctamente!","","success"),this.getAll()})})}ngOnInit(){this.getAll()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-get"]],decls:23,vars:1,consts:[[1,"container"],["routerLink","/vuelos/create",1,"btn"],[1,"table","responsive"],[4,"ngFor","ngForOf"],[1,"btn",3,"routerLink"],[1,"material-icons"],[1,"btn","red",3,"click"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"br"),e.TgZ(2,"a",1),e._uU(3,"Registrar vuelos"),e.qZA(),e.TgZ(4,"table",2)(5,"thead")(6,"tr")(7,"th"),e._uU(8,"Fecha Inicio"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Hora Inicio"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Fecha Fin"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Hora Fin"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Asientos Vendidos"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Nombre del Piloto"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Rutaid"),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,b,22,8,"tr",3),e.qZA()()()),2&i&&(e.xp6(22),e.Q6J("ngForOf",n.listado))},dependencies:[p.sg,l.yS]}),t})();var h=r(2025);const A=[{path:"create",canActivate:[h.I],component:v},{path:"edit/:id",canActivate:[h.I],component:Z},{path:"get",canActivate:[h.I],component:T},{path:"",pathMatch:"full",redirectTo:"get"}];let U=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(A),l.Bz]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,o.u5,o.UX,U]}),t})()}}]);