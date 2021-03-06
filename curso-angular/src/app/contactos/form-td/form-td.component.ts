import { Component, OnInit } from '@angular/core';
import { Contacto, Grupo } from 'src/app/models/contacto.model';

@Component({
  selector: 'iam-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  contacto: Contacto
  aGrupos: Array<Grupo>

  constructor() { }

  ngOnInit() {
    this.contacto = new Contacto();
    this.aGrupos = [
      {
        id: 0,
        nombre: 'Familia',
        descripcion: 'Familia'
      },
      {
        id: 0,
        nombre: 'Amigos',
        descripcion: 'Amigos'
      },
      {
        id: 0,
        nombre: 'Negocios',
        descripcion: 'Negocios'
      },
      {
        id: 0,
        nombre: 'Trabajo',
        descripcion: 'Trabajo'
      },
      {
        id: 0,
        nombre: 'Otros',
        descripcion: 'Cualquier otros'
      }




    ]
  }

}
