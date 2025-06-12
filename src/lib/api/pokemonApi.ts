import { Pokemon, PokemonListResponse, Type, TypeListResponse } from '@/types/pokemon';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: (builder) => ({
        getPokemonList: builder.query<PokemonListResponse, void>({
            query: () => ({
                url: `pokemon?limit=151&offset=0`,
                method: 'GET'
            })
        }),
        getPokemonDetails: builder.query<Pokemon, { name: string }>({
            query: ({ name }) => ({
                url: `pokemon/${name}`,
                method:"GET"
            })
        }),
        getPokemonByType: builder.query({
            query: ({ type }) => ({
                url: `type/${type}`,
                method:"GET"
            })
        }),
        getPokemonType: builder.query<Type[], void>({
            query: () => ({
                url: 'type',
                method:"GET"
            }),
            transformResponse: (response: TypeListResponse) => {
                const validTypes = response.results.filter(type =>
                    !['unknown', 'shadow'].includes(type.name)
                );
                return validTypes.map((type, index) => ({
                    id: index + 1,
                    name: type.name,
                    url: type.url
                }));
            },
        })
    })
})

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery, useGetPokemonByTypeQuery, useGetPokemonTypeQuery } = pokemonApi;