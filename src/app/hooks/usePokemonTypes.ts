import { useGetPokemonTypeQuery } from "@/lib/api/pokemonApi";

export function usePokemonTypes() {
  const { data, error, isLoading } = useGetPokemonTypeQuery();

  return { data, error, isLoading };
}