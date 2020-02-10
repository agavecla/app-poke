import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { responsePokemonDetail } from "./pokemon-detail.model";

@Injectable({
  providedIn: 'root'
})
export class ListaPokeDetailService {

  private url = "";
  constructor(private http: HttpClient) { }
  
  getPokeDetail(): Observable<responsePokemonDetail>{
    return this.http.get<responsePokemonDetail>(this.url);

  };


}
