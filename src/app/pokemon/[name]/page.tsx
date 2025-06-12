"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

//slices
import { useGetPokemonDetailsQuery } from "@/lib/api/pokemonApi";

//components
import Breadcrumb from "@/app/components/Breadcrumb";
import Loader from "@/app/components/Loader";

const PokemonDetailPage = () => {
  const params = useParams();
  const name = params.name;

  const { data: pokemon, isLoading: isPokemonDataLoading } =
    useGetPokemonDetailsQuery({ name: String(name) });
  return (
    <>
      {isPokemonDataLoading ? (
        <Loader />
      ) : (
        <div className="m-8">
          <Breadcrumb name={pokemon?.name} />
          <div className="flex flex-col justify-center border border-black rounded-2xl w-full md:mx-auto md:w-1/2">
            <h1 className="text-center capitalize text-[28px]">
              {pokemon?.name}
            </h1>
            <Image
              src={
                pokemon?.sprites?.other["official-artwork"].front_default || ""
              }
              alt={"pokemon-image"}
              width={350}
              height={350}
              className="m-auto"
            />
            <div className="flex flex-col justify-center px-8">
              <h3>Weight: {pokemon?.weight}</h3>
              <div>
                {pokemon?.stats?.map((stat) => {
                  const statName = stat?.stat?.name;
                  const statValue = stat?.base_stat;

                  return (
                    <div
                      className="flex items-stretch flex-wrap"
                      key={stat.stat.name}
                    >
                      <h3 className="p-3 w-2/4">
                        {statName} : {statValue}
                      </h3>
                      <progress className="w-2/4 m-auto" value={statValue} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetailPage;
