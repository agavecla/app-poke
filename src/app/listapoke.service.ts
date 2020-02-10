import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { responsePokemon } from "./pokemon/pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class ListaPokeService {

  private url = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient) { }

  getPoke(): Observable<responsePokemon>{
    return this.http.get<responsePokemon>(this.url);

  }

}
