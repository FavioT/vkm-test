import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  registerClient(documento: number, apellido: string, nombre: string, telefono: number, direccion: string) {
    return this.http.post('http://localhost:3000/registerClient', {
        documento: documento,
        apellido: apellido,
        nombre: nombre,
        telefono: telefono,
        direccion: direccion
        } , this.getHeader()).pipe(
      map(response => {
          if (response['success'] === true) {
            return response['data'];
        } else {
            return ([] as any);
        }
    }),
    catchError(err => {
        return ({} as any);
    })
    );
  }

  mockup() {
    return this.http.get('http://www.mocky.io/v2/5c64a4053300005500b99924', this.getHeader()).pipe(
      map(response => {
          return response;
    }),
    catchError(err => {
        return ({} as any);
    })
    );
  }

  getHeader() {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };
  }
}
