import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of, shareReplay, tap } from 'rxjs';
import { ListPokemonGQL, ListPokemonQuery } from 'src/generated/graphql';

@Component({
  selector: 'water-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeRatesComponent implements OnInit {
  pokemons$: Observable<ListPokemonQuery['pokemon_v2_pokemon']> = of([]);
  loading$: Observable<boolean> = of(true);
  errors$: Observable<any> = of(null);

  constructor(private listPokemonGQL: ListPokemonGQL) {}

  ngOnInit(): void {
    this.pokemons$ = this.listPokemonGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.pokemon_v2_pokemon));
  }
}
