import { Component, OnInit } from '@angular/core';
import { responsePokemonDetail } from "./pokemon-detail.model";
import { ListaPokeDetailService } from "./listapokedetail.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  responsePokemon: responsePokemonDetail;
  constructor(private ListaPokeDetailService: ListaPokeDetailService) { }

  ngOnInit() {
    this.ListaPokeDetailService.getPokeDetail().subscribe(res => this.responsePokemon = res )
  }

}
