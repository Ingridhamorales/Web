import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VueloModel } from 'src/app/modelos/vuelo.model';
import { VueloService } from 'src/app/servicios/vuelo.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private vueloService: VueloService,
    private router: Router,
    private route: ActivatedRoute) { }

    fgValidacion = this.fb.group({
      id: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      hora_fin: ['', [Validators.required ]],
      asientos_vendidos: ['', [Validators.required ]],
      nombre_piloto: ['', [Validators.required ]],
      rutaid: ['', [Validators.required ]],
    });
  

    getWithId(id: string){
      this.vueloService.getWithId(id).subscribe((data: VueloModel) => {
        console.log(data)
        this.fgValidacion.controls["id"].setValue(id)
        this.fgValidacion.controls["fecha_inicio"].setValue(data.fecha_inicio as string)
        this.fgValidacion.controls["hora_inicio"].setValue(data.hora_inicio as string)
        this.fgValidacion.controls["fecha_fin"].setValue(data.fecha_fin as string)
        this.fgValidacion.controls["hora_fin"].setValue(data.hora_fin as string)
        this.fgValidacion.controls["asientos_vendidos"].setValue(data.asientos_vendidos as string)
        this.fgValidacion.controls["nombre_piloto"].setValue(data.nombre_piloto as string)
        this.fgValidacion.controls["rutaid"].setValue(data.rutaid as string)
      })
    }
  
    edit(){
      let vuelo = new VueloModel();
      vuelo.id = this.fgValidacion.controls["id"].value as string;
      vuelo.fecha_inicio = this.fgValidacion.controls["fecha_inicio"].value as string;
      vuelo.hora_inicio = this.fgValidacion.controls["hora_inicio"].value as string;
      vuelo.fecha_fin = this.fgValidacion.controls["fecha_fin"].value as string;
      vuelo.hora_fin = this.fgValidacion.controls["hora_fin"].value as string;
      vuelo.asientos_vendidos = this.fgValidacion.controls["asientos_vendidos"].value as string;
      vuelo.nombre_piloto = this.fgValidacion.controls["nombre_piloto"].value as string;
      vuelo.rutaid = this.fgValidacion.controls["rutaid"].value as string;
   
      this.vueloService.update(vuelo).subscribe((data: VueloModel)=> {
        Swal.fire('Editado Correctamente!', '', 'success')
        this.router.navigate(['/vuelos/get']);
      },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
    }
  

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"]
    this.getWithId(id);
  }

}
