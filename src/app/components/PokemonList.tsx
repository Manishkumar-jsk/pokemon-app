"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

//slices
import {
  useGetPokemonByTypeQuery,
  useGetPokemonListQuery,
} from "@/lib/api/pokemonApi";

//types
import { Pokemons, PokemonTypePokemon, PokemonTypes } from "@/types/pokemon";
import Loader from "./Loader";

const PokemonList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "";
  const search = searchParams.get("search") || "";

  //slices
  const { data: pokemons, isLoading: isPokemonsLoading } =
    useGetPokemonListQuery();

  const {
    data: pokemonType,
    isLoading: isPokemonsTypeLoading,
    isFetching: isPokemonsTypeFetching,
  } = useGetPokemonByTypeQuery({ type });

  const filteredData = pokemons?.results?.filter((pokemon: Pokemons) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredTypeData = pokemonType?.pokemon
    ?.filter((pokemon: PokemonTypes) =>
      pokemon?.pokemon?.name.toLowerCase().includes(search?.toLowerCase())
    )
    .map((item: PokemonTypePokemon) => ({
      name: item.pokemon?.name,
      url: item.pokemon?.url,
    }));

  const isLoading =
    isPokemonsLoading || isPokemonsTypeLoading || isPokemonsTypeFetching;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid gap-4 pt-12 px-16 py-12 grid-cols-2 md:grid-cols-3">
          {(type ? filteredTypeData : filteredData)?.map(
            (pokemon: Pokemons) => (
              <div
                key={pokemon.name}
                style={{ cursor: "pointer" }}
                onClick={() => router.push(`/pokemon/${pokemon.name}`)}
              >
                <div className="border border-black p-4 rounded-2xl text-center">
                  <h3 className="capitalize mt-2 font-medium">
                    {pokemon?.name}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

export default PokemonList;
