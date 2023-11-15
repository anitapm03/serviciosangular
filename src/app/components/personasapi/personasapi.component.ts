import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { ServicePersonas } from 'src/app/services/service.persona';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit{
  public personas!: Array<Persona>;

  constructor(private _servicePersonas: ServicePersonas){}

  ngOnInit(): void {
    // this._servicePersonas.getPersonas().subscribe(response =>{
    //   this.personas = response;
    // })

    //forma 1
    this._servicePersonas.getPersonasPromesa().then(response => {
      this.personas = response;
    })

  }

}
