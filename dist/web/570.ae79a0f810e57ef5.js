"use strict";(self.webpackChunkWeb=self.webpackChunkWeb||[]).push([[570],{4570:(I,g,a)=>{a.r(g),a.d(g,{AdminModule:()=>y});var f=a(6895),s=a(9965),r=a(433),h=a(1928),v=a(5226),u=a.n(v),e=a(8256),d=a(529),Z=a(3761);let c=(()=>{class o{constructor(t,i){this.http=t,this.seguridadService=i,this.url="https://apiloopback1.herokuapp.com/",this.token="",this.token=this.seguridadService.getToken()}store(t){return this.http.post(`${this.url}/usuarios`,{nombre:t.nombre,apellidos:t.apellidos,telefono:t.telefono,correo:t.correo,password:""})}getAll(){return this.http.get(`${this.url}/usuarios`,{headers:new d.WM({Authorization:`Bearer ${this.token}`})})}update(t){return this.http.patch(`${this.url}/usuarios/${t.id}`,{nombre:t.nombre,apellidos:t.apellidos,telefono:t.telefono,correo:t.correo},{headers:new d.WM({Authorization:`Bearer ${this.token}`})})}delete(t){return this.http.delete(`${this.url}/usuarios/${t}`,{headers:new d.WM({Authorization:`Bearer ${this.token}`})})}getWithId(t){return this.http.get(`${this.url}/usuarios/${t}`,{headers:new d.WM({Authorization:`Bearer ${this.token}`})})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(d.eN),e.LFG(Z.F))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),b=(()=>{class o{constructor(t,i,l){this.fb=t,this.usuarioService=i,this.router=l,this.fgValidacion=this.fb.group({nombre:["",[r.kI.required]],apellidos:["",[r.kI.required]],telefono:["",[r.kI.required,r.kI.minLength(10)]],correo:["",[r.kI.required,r.kI.email]]})}ngOnInit(){}store(){let t=new h.g;t.nombre=this.fgValidacion.controls.nombre.value,t.apellidos=this.fgValidacion.controls.apellidos.value,t.correo=this.fgValidacion.controls.correo.value,t.telefono=this.fgValidacion.controls.telefono.value,this.usuarioService.store(t).subscribe(i=>{u().fire("Creado correctamente!","","success"),this.router.navigate(["/admin/get"])},i=>{console.log(i),alert("Error en el envio")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(c),e.Y36(s.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create"]],decls:30,vars:2,consts:[[1,"container"],[1,"center-align"],[1,"col","s12",3,"formGroup","ngSubmit"],[1,"row"],[1,"input-field","col","s6"],["formControlName","nombre","type","text",1,"validate"],["for","nombre"],["formControlName","apellidos","type","text",1,"validate"],["for","apellidos"],[1,"input-field","col","s12"],["formControlName","telefono","type","text",1,"validate"],["for","telefono"],["formControlName","correo","type","email",1,"validate"],["for","correo"],["data-error","Correo invalido","data-success","right",1,"helper-text"],[1,"row","center-align"],["type","submit","name","action",1,"btn","waves-effect","waves-light",3,"disabled"],[1,"material-icons","right"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Registrar Usuario"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return i.store()}),e.TgZ(4,"div",3)(5,"div",4),e._UZ(6,"input",5),e.TgZ(7,"label",6),e._uU(8,"Nombre"),e.qZA()(),e.TgZ(9,"div",4),e._UZ(10,"input",7),e.TgZ(11,"label",8),e._uU(12,"Apellidos"),e.qZA()()(),e.TgZ(13,"div",3)(14,"div",9),e._UZ(15,"input",10),e.TgZ(16,"label",11),e._uU(17,"Telefono"),e.qZA()()(),e.TgZ(18,"div",3)(19,"div",9),e._UZ(20,"input",12),e.TgZ(21,"label",13),e._uU(22,"Correo"),e.qZA(),e.TgZ(23,"span",14),e._uU(24,"Estado"),e.qZA()()(),e.TgZ(25,"div",15)(26,"button",16),e._uU(27,"Enviar "),e.TgZ(28,"i",17),e._uU(29,"send"),e.qZA()()()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",i.fgValidacion),e.xp6(23),e.Q6J("disabled",!i.fgValidacion.valid))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]}),o})(),T=(()=>{class o{constructor(t,i,l,m){this.fb=t,this.usuarioService=i,this.router=l,this.route=m,this.fgValidacion=this.fb.group({id:["",[r.kI.required]],nombre:["",[r.kI.required]],apellidos:["",[r.kI.required]],telefono:["",[r.kI.required,r.kI.minLength(6)]],correo:["",[r.kI.required,r.kI.email]]})}getWithId(t){this.usuarioService.getWithId(t).subscribe(i=>{console.log(i),this.fgValidacion.controls.id.setValue(t),this.fgValidacion.controls.nombre.setValue(i.nombre),this.fgValidacion.controls.apellidos.setValue(i.apellidos),this.fgValidacion.controls.correo.setValue(i.correo),this.fgValidacion.controls.telefono.setValue(i.telefono)})}edit(){let t=new h.g;t.id=this.fgValidacion.controls.id.value,t.nombre=this.fgValidacion.controls.nombre.value,t.apellidos=this.fgValidacion.controls.apellidos.value,t.correo=this.fgValidacion.controls.correo.value,t.telefono=this.fgValidacion.controls.telefono.value,this.usuarioService.update(t).subscribe(i=>{u().fire("Editado Correctamente!","","success"),this.router.navigate(["/admin/get"])},i=>{console.log(i),alert("Error en el envio")})}ngOnInit(){this.getWithId(this.route.snapshot.params.id)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(c),e.Y36(s.F0),e.Y36(s.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit"]],decls:30,vars:2,consts:[[1,"container"],[1,"center-align"],[1,"col","s12",3,"formGroup","ngSubmit"],["formControlName","id","type","hidden",1,"validate"],[1,"row"],[1,"input-field","col","s6"],["formControlName","nombre","type","text",1,"validate"],["for","nombre",1,"active"],["formControlName","apellidos","type","text",1,"validate"],["for","apellidos",1,"active"],["formControlName","telefono","type","text",1,"validate"],["for","telefono",1,"active"],["formControlName","correo","type","email",1,"validate"],["for","correo",1,"active"],["data-error","Correo invalido","data-success","right",1,"helper-text"],[1,"row","center-align"],["type","submit","name","action",1,"btn","waves-effect","waves-light",3,"disabled"],[1,"material-icons","right"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2,"Editar Usuario"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return i.edit()}),e._UZ(4,"input",3),e.TgZ(5,"div",4)(6,"div",5),e._UZ(7,"input",6),e.TgZ(8,"label",7),e._uU(9,"Nombre"),e.qZA()(),e.TgZ(10,"div",5),e._UZ(11,"input",8),e.TgZ(12,"label",9),e._uU(13,"Apellidos"),e.qZA()()(),e.TgZ(14,"div",4)(15,"div",5),e._UZ(16,"input",10),e.TgZ(17,"label",11),e._uU(18,"Telefono"),e.qZA()(),e.TgZ(19,"div",5),e._UZ(20,"input",12),e.TgZ(21,"label",13),e._uU(22,"Correo"),e.qZA(),e.TgZ(23,"span",14),e._uU(24,"Estado"),e.qZA()()(),e.TgZ(25,"div",15)(26,"button",16),e._uU(27,"Editar "),e.TgZ(28,"i",17),e._uU(29,"send"),e.qZA()()()()()),2&t&&(e.xp6(3),e.Q6J("formGroup",i.fgValidacion),e.xp6(23),e.Q6J("disabled",!i.fgValidacion.valid))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]}),o})();function A(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"a",4)(11,"i",5),e._uU(12,"edit"),e.qZA()(),e.TgZ(13,"button",6),e.NdJ("click",function(){const m=e.CHM(t).$implicit,V=e.oxw();return e.KtG(V.delete(m.id))}),e.TgZ(14,"i",5),e._uU(15,"delete"),e.qZA()()()()}if(2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Oqu(t.apellidos),e.xp6(2),e.Oqu(t.correo),e.xp6(2),e.Oqu(t.telefono),e.xp6(2),e.MGl("routerLink","/admin/edit/",t.id,"")}}let C=(()=>{class o{constructor(t){this.usuarioService=t,this.listado=[]}ngOnInit(){this.getAll()}getAll(){this.usuarioService.getAll().subscribe(t=>{this.listado=t,console.log(t)})}delete(t){console.log(t),u().fire({title:"\xbfEsta seguro de eliminar este registro?",showCancelButton:!0,confirmButtonText:"Aceptar"}).then(i=>{i.isConfirmed&&this.usuarioService.delete(t).subscribe(l=>{u().fire("\xa1Eliminado correctamente!","","success"),this.getAll()})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(c))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-get"]],decls:19,vars:1,consts:[[1,"container"],["routerLink","/admin/create",1,"btn"],[1,"table","responsive"],[4,"ngFor","ngForOf"],[1,"btn",3,"routerLink"],[1,"material-icons"],[1,"btn","red",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"br"),e.TgZ(2,"a",1),e._uU(3,"Registrar Persona"),e.qZA(),e.TgZ(4,"table",2)(5,"thead")(6,"tr")(7,"th"),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Apellidos"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Correo"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Telefono"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Acciones"),e.qZA()()(),e.TgZ(17,"tbody"),e.YNc(18,A,16,5,"tr",3),e.qZA()()()),2&t&&(e.xp6(18),e.Q6J("ngForOf",i.listado))},dependencies:[f.sg,s.yS]}),o})();var p=a(2025);const U=[{path:"create",canActivate:[p.I],component:b},{path:"edit/:id",canActivate:[p.I],component:T},{path:"get",canActivate:[p.I],component:C},{path:"",pathMatch:"full",redirectTo:"get"}];let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.Bz.forChild(U),s.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.ez,r.u5,r.UX,q]}),o})()}}]);