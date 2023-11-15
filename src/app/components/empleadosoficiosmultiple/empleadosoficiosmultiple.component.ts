import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { ServiceEmpleados } from 'src/app/services/service.empleados';

@Component({
  selector: 'app-empleadosoficiosmultiple',
  templateUrl: './empleadosoficiosmultiple.component.html',
  styleUrls: ['./empleadosoficiosmultiple.component.css']
})
export class EmpleadosoficiosmultipleComponent implements OnInit{
  public funciones!: Array<string>;
  public empleados!: Array<Empleado>;
  public seleccion!: Array<string>;

  @ViewChild("selectfuncion") selectFuncionRef!: ElementRef;

  constructor(private _serviceEmpleados: ServiceEmpleados){}

  ngOnInit(): void {

    this._serviceEmpleados.getFunciones().subscribe(response => {
      this.funciones = response;
      console.log(this.funciones);
    })
  }

  buscarEmpleadosMultiple(): void{
    //this.seleccion = this.selectFuncionRef.nativeElement.selected;
    console.log(this.seleccion);
    this._serviceEmpleados.getEmpleadosMultiple(this.seleccion).subscribe(response =>{
       this.empleados = response;
    })

  }

}
