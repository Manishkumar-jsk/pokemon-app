export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}


export interface Pokemon {
  id: number;
  name: string;
  url: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
  abilities: Ability[];
  stats: Stat[];
}

export interface Type {
  id: number;
  name: string;
  url: string;
}

export interface TypeListResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

export interface Pokemons {
  name: string;
  url: string;
}

export interface PokemonTypes {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export interface PokemonTypePokemon {
  pokemon: {
    name: string;
    url: string;
  };
}