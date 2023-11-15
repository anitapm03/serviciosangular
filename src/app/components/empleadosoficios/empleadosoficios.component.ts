import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { ServiceEmpleados } from 'src/app/services/service.empleados';

@Component({
  selector: 'app-empleadosoficios',
  templateUrl: './empleadosoficios.component.html',
  styleUrls: ['./empleadosoficios.component.css']
})
export class EmpleadosoficiosComponent implements OnInit{
  public funciones!: Array<string>;
  public empleados!: Array<Empleado>;

  @ViewChild("selectfuncion") selectFuncionRef!: ElementRef;

  constructor(private _serviceEmpleados: ServiceEmpleados){}

  ngOnInit(): void {

    this._serviceEmpleados.getFunciones().subscribe(response => {
      this.funciones = response;
      console.log(this.funciones);
    })
    
  }

  buscarEmpleados(): void{
    var funcion = this.selectFuncionRef.nativeElement.value;
    //console.log(funcion);
    this._serviceEmpleados.getEmpleadosFuncion(funcion).subscribe(response =>{
      this.empleados = response;
    })

  }

}
