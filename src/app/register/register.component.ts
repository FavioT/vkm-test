import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/demo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private demo: ApiService ) { }

  documento: number;
  apellido: string;
  nombre: string;
  telefono: number;
  direccion: string;

  ngOnInit() {
  }

  register() {
    this.demo.registerClient(this.documento,  this.apellido, this.nombre, this.telefono, this.direccion);
    alert('Usuario suscripto');
  }

}
