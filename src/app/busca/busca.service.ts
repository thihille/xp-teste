import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private clienteId: string = '87912b9da084415b9d06670644e6f2a3';
  private urlArtista: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clienteId + '&q=';

  constructor(private http: HttpClient) { }

  buscarArtista(buscaInput: string): Observable<[]> {
    const url = this.urlArtista + buscaInput;

    return this.http.get(url).pipe(
      map(res => res.json()));
  }
}
