import { Component, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  private TABLE_DATA: Clients[] = [];
  private dataSource: any;
  private response: any;

  constructor( private http: HttpClient, private api: ApiService ) {
    const result = [];
    this.getJSON().subscribe(data => {
      data.forEach(element => {
        result.push({
          documento:  element.documento,
          apellido:   element.apellido,
          nombre:     element.nombre,
          direccion:  element.direccion,
          telefono:   element.telefono,
          estado:     element.estado
        });
      });
    });
    this.TABLE_DATA = result;
    this.callMockup();
  }

  displayedColumns: string[] = ['documento', 'apellido', 'nombre', 'direccion', 'telefono', 'estado'];

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.TABLE_DATA);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getJSON() {
    return this.http.get('./assets/clientes.json');
  }

  callMockup() {
    this.api.mockup().subscribe(response => {
      this.response = response;
    });
  }

}

export interface Clients {
  documento:  number;
  apellido:   string;
  nombre:     string;
  direccion:  string;
  telefono:   number;
  estado:     string;
}
