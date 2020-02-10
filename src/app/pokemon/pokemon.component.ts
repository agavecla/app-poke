import { ListaPokeService } from '../listapoke.service';
import { Component, OnInit } from '@angular/core';
import { responsePokemon } from "./pokemon.model";


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  responsePokemon: responsePokemon;
  constructor(private ListaPokeService: ListaPokeService) { }

  ngOnInit() {
    this.ListaPokeService.getPoke().subscribe(res => this.responsePokemon = res )
  }

}
